const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
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
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

