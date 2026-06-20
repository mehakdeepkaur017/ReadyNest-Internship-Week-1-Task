import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/models/Form";
import ResponseModel from "@/models/Response";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;

    const { searchParams } = new URL(req.url);
    const daysParam = searchParams.get("days");
    const days = daysParam && !isNaN(parseInt(daysParam)) ? parseInt(daysParam) : 30;

    // Verify form ownership
    const form = await Form.findOne({ _id: id, userId: session.user.id });
    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // Determine the start date for filtering
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // 1. Fetch all responses for this form (respecting date filter for most stats)
    // Some stats like total responses might want to be all-time, but usually analytics is filtered by the period.
    const allResponses = await ResponseModel.find({ 
      formId: id,
      ...(daysParam !== "all" && { submittedAt: { $gte: startDate } })
    }).sort({ submittedAt: 1 }).lean();

    // 2. Responses over time (last X days)
    const responsesOverTimeAgg = await ResponseModel.aggregate([
      {
        $match: {
          formId: form._id,
          ...(daysParam !== "all" && { submittedAt: { $gte: startDate } })
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$submittedAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Fill in missing days
    const responsesOverTime = [];
    const timelineDays = daysParam === "all" ? 30 : days; // max show 30 days of daily breakdown for "all" to not clutter, or just show last 30
    for (let i = timelineDays - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const found = responsesOverTimeAgg.find((r) => r._id === dateStr);
      responsesOverTime.push({
        date: dateStr,
        count: found ? found.count : 0,
      });
    }

    // 3. Daily activity (day of week traffic)
    const dailyActivityAgg = await ResponseModel.aggregate([
      {
        $match: {
          formId: form._id,
          ...(daysParam !== "all" && { submittedAt: { $gte: startDate } })
        },
      },
      {
        $group: {
          _id: { $dayOfWeek: "$submittedAt" },
          count: { $sum: 1 },
        },
      },
    ]);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dailyActivity = daysOfWeek.map((day, idx) => {
      const found = dailyActivityAgg.find((r) => r._id === idx + 1);
      return { day, count: found ? found.count : 0 };
    });

    // 4. Question-by-question statistics
    const questionStats = form.fields.map((field: any) => {
      const fieldId = field.id;
      const values = allResponses
        .map((r) => r.data[fieldId])
        .filter((val) => val !== undefined && val !== null && val !== "");

      const totalSubmissions = allResponses.length;
      const filledSubmissions = values.length;
      const completionRate = totalSubmissions > 0 ? Math.round((filledSubmissions / totalSubmissions) * 100) : 0;

      const stats: Record<string, any> = {
        fieldId,
        label: field.label,
        type: field.type,
        completionRate,
        total: filledSubmissions,
      };

      if (["dropdown", "radio", "checkbox"].includes(field.type)) {
        // Option selection frequency
        const counts: Record<string, number> = {};
        
        // Initialize options
        const fieldOptions = field.options || [];
        fieldOptions.forEach((opt: any) => {
          counts[opt.value] = 0;
        });

        // Tally values
        values.forEach((val) => {
          if (Array.isArray(val)) {
            val.forEach((v) => {
              counts[v] = (counts[v] || 0) + 1;
            });
          } else {
            counts[val] = (counts[val] || 0) + 1;
          }
        });

        stats.optionsDistribution = fieldOptions.map((opt: any) => {
          const count = counts[opt.value] || 0;
          const pct = filledSubmissions > 0 ? Math.round((count / filledSubmissions) * 100) : 0;
          return {
            label: opt.label,
            value: opt.value,
            count,
            percentage: pct,
          };
        });
      } else if (field.type === "rating") {
        // Average and distribution
        const ratingCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        let sum = 0;

        values.forEach((val) => {
          const numVal = Number(val);
          if (!isNaN(numVal) && numVal >= 1 && numVal <= 5) {
            ratingCounts[numVal as keyof typeof ratingCounts] += 1;
            sum += numVal;
          }
        });

        const average = filledSubmissions > 0 ? Math.round((sum / filledSubmissions) * 10) / 10 : 0;
        stats.averageRating = average;
        stats.ratingsDistribution = Object.keys(ratingCounts).map((key) => {
          const rating = Number(key);
          const count = ratingCounts[rating];
          const pct = filledSubmissions > 0 ? Math.round((count / filledSubmissions) * 100) : 0;
          return { rating, count, percentage: pct };
        });
      } else {
        // Text field submissions: show last 5 responses
        stats.recentTextSubmissions = values.slice(-5).map((val) => String(val));
      }

      return stats;
    });

    // 5. Smart NLP/Simulated Insights
    const ratingStats = questionStats.find((s: any) => s.type === "rating");
    const avgRating = ratingStats?.averageRating || 0;

    let sentiment = "Neutral";
    let summaryText = `This form has recorded ${allResponses.length} submissions. The completion rate is solid, indicating clear fields and high relevance for respondents.`;
    const suggestions = [
      "Improve fields that have lower completion rates to increase the conversion rate.",
      "Promote the form link via email lists to gather more daily responses.",
    ];

    if (allResponses.length > 0) {
      if (avgRating > 4) {
        sentiment = "Extremely Positive";
        summaryText = `Submissions show exceptionally high satisfaction, with an average rating of ${avgRating}/5. Users are responding very favorably to form prompts.`;
        suggestions.unshift("Consider capturing testimonial consents from these positive submissions.");
      } else if (avgRating > 3) {
        sentiment = "Favorable";
        summaryText = `Overall sentiment is favorable. The rating averages around ${avgRating}/5. There is positive engagement with a few areas open to revision.`;
      } else if (avgRating > 0) {
        sentiment = "Needs Review";
        summaryText = `Submissions indicate customer pain points with an average rating of ${avgRating}/5. Review recent entries to address complaints immediately.`;
        suggestions.unshift("Simplify dropdown options or rating categories to reduce form friction.");
      }
    } else {
      summaryText = "Welcome to FormForge Insights. Once you collect form submissions, we will analyze responses for sentiment analysis and suggestions.";
    }

    const aiInsights = {
      sentiment,
      summary: summaryText,
      suggestions,
    };

    // Quiz Mode Analytics Aggregations
    let quizStats = undefined;
    if (form.isQuizMode) {
      const quizAttempts = allResponses.filter(r => r.quizResult !== undefined);
      
      if (quizAttempts.length > 0) {
        const scores = quizAttempts.map(r => r.quizResult.score);
        const highestScore = Math.max(...scores);
        const lowestScore = Math.min(...scores);
        const sumScores = scores.reduce((sum, s) => sum + s, 0);
        const averageScore = Math.round((sumScores / quizAttempts.length) * 10) / 10;
        
        const passedCount = quizAttempts.filter(r => r.quizResult.passed).length;
        const passRate = Math.round((passedCount / quizAttempts.length) * 100);

        // Leaderboard: top 10 sorted by score desc, then timeTaken asc
        const leaderboard = quizAttempts
          .map(r => ({
            name: r.candidateInfo?.name || r.quizResult.respondentName || "Guest",
            email: r.candidateInfo?.email || r.quizResult.respondentEmail || "anonymous",
            candidateInfo: r.candidateInfo || null,
            score: r.quizResult.score,
            totalMarks: r.quizResult.totalMarks,
            percentage: r.quizResult.percentage,
            timeTaken: r.quizResult.timeTaken,
            passed: r.quizResult.passed,
            submittedAt: r.submittedAt
          }))
          .sort((a, b) => b.score - a.score || a.timeTaken - b.timeTaken)
          .slice(0, 10);

        // Score Distribution Buckets: [0-20%], [21-40%], [41-60%], [61-80%], [81-100%]
        const distributionBuckets = [
          { name: "0-20%", count: 0 },
          { name: "21-40%", count: 0 },
          { name: "41-60%", count: 0 },
          { name: "61-80%", count: 0 },
          { name: "81-100%", count: 0 },
        ];

        quizAttempts.forEach(r => {
          const pct = r.quizResult.percentage;
          if (pct <= 20) distributionBuckets[0].count++;
          else if (pct <= 40) distributionBuckets[1].count++;
          else if (pct <= 60) distributionBuckets[2].count++;
          else if (pct <= 80) distributionBuckets[3].count++;
          else distributionBuckets[4].count++;
        });

        quizStats = {
          highestScore,
          lowestScore,
          averageScore,
          passRate,
          leaderboard,
          scoreDistribution: distributionBuckets
        };
      } else {
        quizStats = {
          highestScore: 0,
          lowestScore: 0,
          averageScore: 0,
          passRate: 0,
          leaderboard: [],
          scoreDistribution: [
            { name: "0-20%", count: 0 },
            { name: "21-40%", count: 0 },
            { name: "41-60%", count: 0 },
            { name: "61-80%", count: 0 },
            { name: "81-100%", count: 0 },
          ]
        };
      }
    }

    return NextResponse.json({
      views: form.views || 0,
      responses: form.responses || 0,
      responsesOverTime,
      dailyActivity,
      questionStats,
      aiInsights,
      isQuizMode: form.isQuizMode,
      quizStats,
    });
  } catch (error) {
    console.error("Form analytics error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
