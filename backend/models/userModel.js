const mogoose = require("mongoose");

const userSchema = mogoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please add a name"],
    },
    lastname: {
      type: String,
      required: [true, "please add a name"],
    },
    othernames: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
    phoneNumber: {
      type: String,
      required: [true, "please add a phone number"],
    },
  },
  { timestamp: true }
);

module.exports = mogoose.model("User", userSchema);
