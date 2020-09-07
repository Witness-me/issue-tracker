const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./controllers/issues");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
import { connectDb } from "./models";

const app = express();

// Middleware
// when app.use() is called with a function as it’s only argument, it’ll match every request and will act as middleware
app.use(bodyParser.json()); // the function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://witness-me.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "issue-tracker",
  issuer: "https://witness-me.eu.auth0.com/",
  algorithms: ["RS256"],
});
// app.use(jwtCheck);

connectDb().then(async () => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});

app.use("/api", routes);
