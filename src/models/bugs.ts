const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bugSchema = new Schema({
  title: { type: String, required: [true, "Bug title is required"] },
  status: { type: String, required: [true, "Choose the bug's status"] },
  comments: String,
  priority: String,
  screenshot: Image,
  deadline: Date,
  isExpired: Boolean,
});

const Bug = mongoose.model("bug", bugSchema);
module.exports = Bug;
