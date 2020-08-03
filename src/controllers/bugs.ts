import { getBugs } from "../models/bugs";
const express = require("express");
const router = express.Router();
console.log("controller started");

// Get bugs
router.get("/", async (req: any, res: any) => {
  console.log("get request...");
  const allBugs = await getBugs({});
  res.send(allBugs);
});

module.exports = router;
