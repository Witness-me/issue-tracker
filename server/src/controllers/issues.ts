import {
  getIssues,
  getAllIssues,
  addIssue,
  deleteIssue,
  updateIssue,
  deleteAll,
} from "../models/issues";
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
console.log("controller started");

// Get all issues
router.get("/all", async (req: Request, res: Response) => {
  console.log("get request all...");
  const allIssues = await getAllIssues();
  res.send(allIssues);
});

// Find issues by any parameter
router.get("/", async (req: Request, res: Response) => {
  console.log("get request finding...");
  const issuesFound = await getIssues(req.body);
  res.send(issuesFound);
});

// Add issue
router.post("/", async (req: Request, res: Response) => {
  console.log("post request...");
  await addIssue(req.body);
  res.status(201).send();
});

// Update issue (by ID)
router.put("/edit/:id", async (req: Request, res: Response) => {
  console.log("put request...");
  await updateIssue(req.body);
  res.status(201).send();
});

// Delete issue by ID
router.delete("/delete/:id", async (req: Request, res: Response) => {
  console.log("delete request...");
  await deleteIssue(req.params.id);
  res.status(200).send();
});

// // Delete all issues
// router.delete("/deleteall", async (req: Request, res: Response) => {
//   console.log("delete request...");
//   await deleteAll();
//   res.status(200).send();
// });

module.exports = router;
