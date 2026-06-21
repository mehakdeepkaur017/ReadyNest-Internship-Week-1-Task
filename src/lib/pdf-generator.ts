import { jsPDF } from "jspdf";
import { FormField } from "@/lib/types";

export function generateQuizPDF(formTitle: string, quizResult: any, fields: FormField[], candidateData?: any, candidateInfoSettings?: any) {
  const doc = new jsPDF();

  // Header branding
  doc.setFillColor(15, 23, 42); // slate-900 header block
  doc.rect(0, 0, 210, 45, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("FormForge Assessment Result", 20, 28);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(226, 232, 240); // slate-200
  doc.text(`Quiz Title: ${formTitle}`, 20, 38);

  // Section: Result Summary Card
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text("Attempt Summary", 20, 60);

  doc.setLineWidth(0.5);
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.line(20, 64, 190, 64);

  // Respondent details
  let yPos = 74;

  if (candidateData && candidateInfoSettings) {
    Object.keys(candidateInfoSettings).forEach(key => {
      if (key === "customFields") return;
      const field = candidateInfoSettings[key];
      if (field?.enabled && candidateData[key]) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(71, 85, 105);
        doc.text(field.label + ":", 20, yPos);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(candidateData[key].toString(), 60, yPos);
        yPos += 7;
      }
    });

    if (candidateInfoSettings.customFields) {
      candidateInfoSettings.customFields.forEach((field: any) => {
        if (field?.enabled && candidateData[field.id]) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(11);
          doc.setTextColor(71, 85, 105);
          doc.text(field.label + ":", 20, yPos);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(15, 23, 42);
          doc.text(candidateData[field.id].toString(), 60, yPos);
          yPos += 7;
        }
      });
    }
  }

  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("Date Taken:", 20, yPos);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 60, yPos);

  yPos += 8;

  // Score stats boxes outline
  doc.setFillColor(248, 250, 252); // slate-50
  doc.rect(20, yPos, 170, 34, "F");
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.rect(20, yPos, 170, 34, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  doc.text("FINAL SCORE", 35, yPos + 11);
  doc.text("PERCENTAGE", 92, yPos + 11);
  doc.text("TIME TAKEN", 148, yPos + 11);

  doc.setFontSize(18);
  // Color the score green/red based on passing status
  if (quizResult.passed) {
    doc.setTextColor(16, 185, 129); // emerald-600
  } else {
    doc.setTextColor(239, 68, 68); // red-600
  }
  doc.text(`${quizResult.score} / ${quizResult.totalMarks}`, 35, yPos + 24);
  doc.text(`${quizResult.percentage}%`, 92, yPos + 24);
  
  doc.setTextColor(147, 51, 234); // purple-600 for time
  const mins = Math.floor(quizResult.timeTaken / 60);
  const secs = quizResult.timeTaken % 60;
  doc.text(`${mins}m ${secs}s`, 148, yPos + 24);

  yPos += 50;

  // Pass / Fail big stamp
  doc.setFontSize(16);
  if (quizResult.passed) {
    doc.setTextColor(16, 185, 129); // emerald-600
    doc.text("STATUS: PASSED", 20, yPos);
  } else {
    doc.setTextColor(239, 68, 68); // red-600
    doc.text("STATUS: FAILED", 20, yPos);
  }

  // Section: Question review
  yPos += 16;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text("Detailed Response Review", 20, yPos);
  doc.line(20, yPos + 4, 190, yPos + 4);

  let y = yPos + 14;

  quizResult.answersAnalysis.forEach((ans: any, idx: number) => {
    const field = fields.find((f) => f.id === ans.fieldId);
    if (!field) return;

    // Check height space
    if (y > 255) {
      doc.addPage();
      y = 30;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(15, 23, 42);
      doc.text("Detailed Response Review (Continued)", 20, y);
      doc.line(20, y + 4, 190, y + 4);
      y += 16;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    // Print Question
    const questionText = `Q${idx + 1}: ${field.label}`;
    const truncatedQ = questionText.length > 70 ? questionText.slice(0, 67) + "..." : questionText;
    doc.text(truncatedQ, 20, y);

    // Correct / Incorrect tag
    doc.setFontSize(10);
    if (ans.isCorrect) {
      doc.setTextColor(16, 185, 129); // emerald-600
      doc.text(`[Correct] (+${ans.scoreAwarded} pts)`, 150, y);
    } else {
      doc.setTextColor(239, 68, 68); // red-600
      doc.text(`[Incorrect] (${ans.scoreAwarded} pts)`, 150, y);
    }

    // Explanation
    y += 7;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    if (field.explanation) {
      const explanationText = `Explanation: ${field.explanation}`;
      const truncatedE = explanationText.length > 90 ? explanationText.slice(0, 87) + "..." : explanationText;
      doc.text(truncatedE, 25, y);
      y += 5;
    }

    y += 8; // spacing between questions
  });

  // Footer page number
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`Page ${i} of ${pageCount}`, 175, 288);
    doc.text("Generated by FormForge Assessment Engine", 20, 288);
  }

  doc.save(`Result_${formTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.pdf`);
}
