import * as mongoose from "mongoose";

// Create Bug schema
const bugSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Bug title is required"] },
  status: { type: String, required: [true, "Choose the bug's status"] },
  createdAt: Date,
  updatedAt: Date,
  comments: String,
  priority: { type: String, required: [true, "Priprity should be stated"] },
  // screenshot: Image,
  deadline: Date,
});
const Bug = mongoose.model("bug", bugSchema);

// Get all bugs
export async function getBugs() {
  console.log("getting bugs...");
  const allBugs = await Bug.find({});
  return allBugs;
}

// Add bug
export async function addBug(req: any) {
  console.log("adding bug...");
  let entry = await new Bug({
    title: req.body.title,
    status: req.body.status,
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: req.body.comments || null,
    priority: req.body.priority,
    deadline: req.body.deadline || null,
  }).save();
  return entry;
}

// Update bug
export async function updateBug(req: any) {
  console.log("updating bug...");
  const filter = { _id: req.params.id };
  const update = req.body;
  update.updatedAt = new Date();
  const result = await Bug.findOneAndUpdate(filter, update);
  if (!result) throw new Error(`Failed to find or update message`);
}

// Delete bug
export async function deleteEntry(id: String) {
  const result = await Bug.findOneAndDelete({ _id: id });
  console.log("deleting bug...");
  if (!result) throw new Error(`Failed to find an entry for deleting`);
}
