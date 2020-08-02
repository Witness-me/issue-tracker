import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
import { connectDb } from "./models";

const app = express();

// Middleware
// when app.use() is called with a function as it’s only argument, it’ll match every request and will act as middleware
app.use(bodyParser.json()); // the function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets
app.use(cors({ origin: "*" }));

const port = process.env.PORT || 5000;

connectDb().then(async () => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});

module.exports = app;

// const mongoose = require("mongoose");
// // Connect to mongoose
// mongoose.connect(process.env.MONGO, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("connected to database"));

// const bugs = require("./server/routes/api/bugs");
// //const app = import("../app");
// app.use("/", bugs);
