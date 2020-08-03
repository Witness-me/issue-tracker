import { getBugs, Bug } from "../models/bugs";
import { loadBugsCollection } from "../server/routes/api/bugs";
const express = require("express");
const router = express.Router();
console.log("controller started");

// Get bugs
// router.get("/1", async (req: any, res: any) => {
//   console.log("getting 1");
//   // res.send("get in controller");
//   const allBugs = await loadBugsCollection();
//   res.send(await allBugs.find({}).toArray());
// });
router.get("/", async (req: any, res: any) => {
  console.log("getting 2");
  let result = await Bug.find({});
  res.send(result);
});
module.exports = router;
