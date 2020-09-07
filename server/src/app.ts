const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./controllers/issues");

import { connectDb } from "./models";

const app = express();

// Middleware
// when app.use() is called with a function as it’s only argument, it’ll match every request and will act as middleware
app.use(bodyParser.json()); // the function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

connectDb().then(async () => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});

app.use("/api", routes);
