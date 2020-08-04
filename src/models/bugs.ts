import * as mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Bug title is required"] },
  status: { type: String, required: [true, "Choose the bug's status"]},
  createdAt: Date,
  comments: String,
  priority: { type: String, required: [true, "Priprity should be stated"]},,
  // screenshot: Image,
  deadline: Date,
});
const Bug = mongoose.model("bug", bugSchema);

// Get bugs
async function getBugs() {
  console.log("getting bugs...");
  const allBugs = await Bug.find();
  return allBugs;
}

// Add bug
async function addBug(req: any) {
  console.log("adding bug...");
  let entry = await new Bug({
    title: req.body.title,
    status: req.body.status,
    createdAt: new Date(),
    comments: req.body.comments || null,
    priority: req.body.priority,
    deadline: req.body.deadline || null
  }).save();
  return entry;
}


// Delete entry
async function deleteEntry(id: String) {
  const result = await Bug.findOne({ _id: id });
}

module.exports = { getBugs, addBug, deleteEntry };
