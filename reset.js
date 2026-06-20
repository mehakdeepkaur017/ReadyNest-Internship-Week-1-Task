const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = "mongodb://localhost:27017/formforge";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function reset() {
  await mongoose.connect(MONGODB_URI);
  const email = "mehakdeepkaur017@gmail.com";
  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found!");
    process.exit(1);
  }
  
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash("password123", salt);
  await user.save();
  console.log("Password reset successfully to 'password123'");
  process.exit(0);
}

reset();
