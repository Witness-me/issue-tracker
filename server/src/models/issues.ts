import * as mongoose from "mongoose";
import { Request } from "express";

// Create Issue schema
const issueSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Issue title is required"] },
  status: { type: String, required: [true, "Choose the issue's status"] },
  createdAt: Date,
  updatedAt: Date,
  comments: String,
  priority: { type: String, required: [true, "Priority should be stated"] },
  deadline: Date,
});
const Issue = mongoose.model("issue", issueSchema);

// Get all issues
export async function getAllIssues() {
  console.log("getting all issues...");
  const AllIssues = await Issue.find({});
  return AllIssues;
}

// Find issues by parameter
// not used for now
export async function getIssues(req: Request) {
  console.log("getting issues...");
  const issueFound = await Issue.find(req);
  return issueFound;
}

// Add issue
export async function addIssue(req: Request) {
  console.log("adding issues...");
  let entry = await new Issue({
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

// Update issue
export async function updateIssue(req: Request) {
  console.log("updating issue...");
  const filter = { _id: req.params.id };
  const update = req.body;
  update.updatedAt = new Date();
  const result = await Issue.findOneAndUpdate(filter, update);
  if (!result) throw new Error(`Failed to find or update message`);
}

// Delete issue
export async function deleteIssue(id: String) {
  console.log("deleting issue...");
  await Issue.findOneAndDelete({ _id: id });
}

// Delete all
export async function deleteAll() {
  console.log("deleteng all issues...");
  await Issue.deleteMany({});
}
