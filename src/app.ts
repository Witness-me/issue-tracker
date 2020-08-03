import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./controllers/bugs");
const router = require("./controllers/bugs");
import { connectDb } from "./models";

const app = express();

// Middleware
// when app.use() is called with a function as it’s only argument, it’ll match every request and will act as middleware
app.use(bodyParser.json()); // the function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets
app.use(cors({ origin: "*" }));
//app.use("/api", routes);
// app.use("/", routes);

const port = process.env.PORT || 5000;

connectDb().then(async () => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});

module.exports = app;

const bugs = require("./server/routes/api/bugs");
app.use("api/bugs", bugs);
