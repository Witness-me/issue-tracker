import {
  getIssues,
  getAllIssues,
  addIssue,
  deleteIssue,
  updateIssue,
} from "../models/issues";
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
console.log("controller started");

// Get all issues
router.get("/all", async (req: Request, res: Response) => {
  console.log("get request...");
  const allIssues = await getAllIssues();
  res.send(allIssues);
});

// Find issues by any parameter
router.get("/", async (req: Request, res: Response) => {
  console.log("get request...");
  const issuesFound = await getIssues(req.body);
  res.send(issuesFound);
});

// Add issue
router.post("/", async (req: Request, res: Response) => {
  console.log("post request...");
  await addIssue(req);
  res.status(201).send();
});

// Update issue (by ID)
router.put("/:id", async (req: Request, res: Response) => {
  console.log("put request...");
  await updateIssue(req);
  res.status(201).send();
});

// Delete issue by ID
router.delete("/:id", async (req: Request, res: Response) => {
  console.log("delete request...");
  await deleteIssue(req.params.id);
  res.status(200).send();
});

module.exports = router;
