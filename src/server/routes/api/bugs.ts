const express = require("express");
const mongodb = require("mongodb");

// When var router = express.Router() is called, a slightly different mini app is returned. The idea behind the mini app is that each route in your app can become quite complicated, and you'd benefit from moving all that code into a separate file. Each file's router becomes a mini app, which has a very similar structure to the main app.
const router = express.Router();

// Get bugs
router.get("/", async (req, res) => {
  const bugs = await loadBugsCollection();
  res.send(await bugs.find({}).toArray());
});

// Add bugs
router.post("/", async (req, res) => {
  const bugs = await loadBugsCollection();
  await bugs.insertOne({
    title: req.body.title,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// Delete bugs
router.delete("/:id", async (req, res) => {
  const bugs = await loadBugsCollection();
  await bugs.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadBugsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://vlad:vlad@cluster0.0ibp3.gcp.mongodb.net/bug-tracker-DB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client.db("bug-tracker-DB").collection("bugs");
}
module.exports = router;
