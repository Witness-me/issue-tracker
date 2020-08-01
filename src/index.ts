const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

// // set home page route
// app.get("/", (req, res) => {
//   res.send("Finally");
//   //res.render('../src/views/index.html');
// });

app.listen(port, () => {
  console.log("server running on port " + port);
});
