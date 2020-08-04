import { getBugs, addBug, deleteEntry } from "../models/bugs";
const express = require("express");
const router = express.Router();
console.log("controller started");

// Get bugs
router.get("/", async (req: any, res: any) => {
  console.log("get request...");
  const allBugs = await getBugs();
  res.send(allBugs);
});

// Add bugs
router.post("/", async (req: any, res: any) => {
  console.log("post request...");
  await addBug(req);
  res.status(201).send();
});

// // Delete bugs
// router.delete("/:id", async (req: any, res: any) => {
//   await deleteEntry(req.params.id);
//   res.status(200).send();
// });
module.exports = router;
