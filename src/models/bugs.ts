import * as mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Bug title is required"] },
  status: { type: String, required: [true, "Choose the bug's status"] },
  comments: String,
  priority: String,
  //screenshot: Image,
  deadline: Date,
  isExpired: Boolean,
});
const Bug = mongoose.model("bug", bugSchema);
module.exports = { Bug };

// Get bugs
export async function getBugs() {
  console.log("getting bugs");
  const allBugs = await Bug.find({});
  return allBugs;
}
