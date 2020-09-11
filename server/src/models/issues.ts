import * as mongoose from "mongoose";
import { Request } from "express";
const Schema = mongoose.Schema;

// Create Issue schema
const issueSchema = new Schema({
  title: { type: String, required: [true, "Issue title is required"] },
  status: { type: String, required: [true, "Choose the issue's status"] },
  createdAt: Date,
  updatedAt: Date,
  comments: String,
  priority: { type: String, required: [true, "Priority should be stated"] },
  userId: { type: String, required: [true, "UserId is required"] },
});
const Issue = mongoose.model("issue", issueSchema);

// Get all issues
export async function getAllIssues() {
  console.log("getting all issues...");
  const AllIssues = await Issue.find({});
  return AllIssues;
}

// Find issues by parameter
export async function getIssues(query: object) {
  console.log("getting issues for user...");
  const issueFound = await Issue.find(query);
  return issueFound;
}

// Add issue
export async function addIssue(issue: any) {
  console.log("adding issues...");
  let entry = await new Issue({
    title: issue.title,
    status: issue.status,
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: issue.comments || null,
    priority: issue.priority,
    userId: issue.userId,
  }).save();
  return entry;
}

// Update issue
export async function updateIssue(issues: any) {
  console.log("updating issue...");
  const filter = { _id: issues._id };
  const update = issues;
  update.updatedAt = new Date();
  // const result = await Issue.updateMany(
  //   {},
  //   { userId: "google-oauth2|105734693007492324608" }
  // );
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
