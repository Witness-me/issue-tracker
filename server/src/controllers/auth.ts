const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

export const authCheck = jwt({
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
