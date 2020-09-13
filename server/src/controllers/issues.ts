import {
  getIssues,
  addIssue,
  deleteIssue,
  updateIssue,
} from "../models/issues";
const express = require("express");
import { authCheck } from "./auth";
import { Request, Response } from "express";

const router = express.Router();
console.log("controller started");

// Get all issues
// router.get("/all", async (req: Request, res: Response) => {
//   console.log("get request all...");
//   const allIssues = await getAllIssues();
//   res.send(allIssues);
// });

// Find issues for current user
router.get("/home", authCheck, async (req: Request, res: Response) => {
  console.log("get request...");
  const issuesFound = await getIssues({ userId: req.user.sub });
  res.send(issuesFound);
});

// Add issue
router.post("/new", async (req: Request, res: Response) => {
  console.log("post request...");
  await addIssue(req.body);
  res.status(201).send();
});

// Update issue by ID
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

module.exports = router;
