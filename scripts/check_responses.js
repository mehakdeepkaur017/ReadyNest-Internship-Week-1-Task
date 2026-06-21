const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

async function run() {
  await mongoose.connect(uri);
  const db = mongoose.connection.db;
  const responses = await db.collection('responses').find().sort({ submittedAt: -1 }).limit(5).toArray();
  console.log("LATEST RESPONSES:");
  for (const r of responses) {
    console.log("ID:", r._id);
    console.log("Metadata:", r.metadata);
    console.log("QuizResult:", r.quizResult ? r.quizResult.respondentEmail : 'N/A');
  }
  process.exit(0);
}

run();
