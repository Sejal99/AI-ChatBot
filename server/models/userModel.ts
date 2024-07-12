import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  password: String,
  twoFactorAuth: {
    enabled: Boolean,
    secret: String,
    tempSecret: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
