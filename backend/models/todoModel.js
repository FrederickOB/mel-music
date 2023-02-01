const mogoose = require("mongoose");

const todoSchema = mogoose.Schema(
  {
    user: {
      type: mogoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    todo: {
      type: String,
      required: [true, "please input todo"],
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mogoose.model("Todo", todoSchema);
