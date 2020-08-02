const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
// when app.use() is called with a function as it’s only argument, it’ll match every request and will act as middleware
app.use(bodyParser.json()); // the function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets
app.use(cors());

const bugs = require("./routes/api/bugs");

// any route that goes to the URL will be directed to posts
app.use("/api/bugs", bugs);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server running on port " + port);
});
