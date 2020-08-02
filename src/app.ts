import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
// when app.use() is called with a function as it’s only argument, it’ll match every request and will act as middleware
app.use(bodyParser.json()); // the function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets
app.use(cors({ origin: "*" }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server running on port " + port);
});

const mongoose = require("mongoose");
// Connect to mongoose
mongoose.connect(
  "mongodb+srv://vlad:vlad@cluster0.0ibp3.gcp.mongodb.net/bug-tracker-DB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const logConnection = () => {
  mongoose.connection
    .once("open", () => {
      console.log("successfully connected to DB");
    })
    .on("error", (err) => {
      console.log("Error occured: ", err);
    });
};
logConnection();

const router = express.Router();

// router.use("/", async (req: any, res: any) => {
//   const bugs = await mongoose.connection();
//   res.send(await bugs.find({}).toArray());
// });
// router.post("/ninjas", (req, res) => {
//   console.log(req.body);
//   res.send({ type: "POST" });
// });

const mongodb = require("mongodb");

async function loadBugsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://vlad:vlad@cluster0.0ibp3.gcp.mongodb.net/bug-tracker-DB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("DB");
  return client.db("bug-tracker-DB").collection("bugs");
}
module.exports = router;

router.get("/", async (req: any, res: any) => {
  const bugs = await loadBugsCollection();
  res.send(await bugs.find({}).toArray());
});
