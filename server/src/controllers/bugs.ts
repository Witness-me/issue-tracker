import {
  getBugs,
  getAllBugs,
  addBug,
  deleteEntry,
  updateBug,
} from "../models/bugs";
const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
console.log("controller started");

// Get all bugs
router.get("/all", async (req: Request, res: Response) => {
  console.log("get request...");
  const allBugs = await getAllBugs();
  res.send(allBugs);
});

// Find bugs by any parameter
router.get("/", async (req: Request, res: Response) => {
  console.log("get request...");
  const bugsFound = await getBugs(req.body);
  res.send(bugsFound);
});

// Add bug
router.post("/", async (req: Request, res: Response) => {
  console.log("post request...");
  await addBug(req);
  res.status(201).send();
});

// Update bug (by ID)
router.put("/:id", async (req: Request, res: Response) => {
  console.log("put request...");
  await updateBug(req);
  res.status(201).send();
});

// Delete bug by ID
router.delete("/:id", async (req: Request, res: Response) => {
  console.log("delete request...");
  await deleteEntry(req.params.id);
  res.status(200).send();
});

module.exports = router;
