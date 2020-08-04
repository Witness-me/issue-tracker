import { getBugs, addBug, deleteEntry, updateBug } from "../models/bugs";
const express = require("express");
const router = express.Router();
console.log("controller started");

// Get all bugs
router.get("/all", async (req: any, res: any) => {
  console.log("get request...");
  const allBugs = await getBugs();
  res.send(allBugs);
});

// Add bug
router.post("/", async (req: any, res: any) => {
  console.log("post request...");
  await addBug(req);
  res.status(201).send();
});

// Update bug (by ID)
router.put("/:id", async (req: any, res: any) => {
  console.log("put request...");
  await updateBug(req);
  res.status(201).send();
});

// Delete bug by ID
router.delete("/:id", async (req: any, res: any) => {
  console.log("delete request...");
  await deleteEntry(req.params.id);
  res.status(200).send();
});

module.exports = router;
