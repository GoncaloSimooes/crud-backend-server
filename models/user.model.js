import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter username."],
    },
    email: {
      type: String,
      required: [true, "Please enter email."],
    },
    profileImage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Exporte como `default` usando ES Modules
const User = mongoose.model("User", UserSchema);
export default User;
