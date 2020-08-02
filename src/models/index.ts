const mongoose = require("mongoose");
console.log("lol");
mongoose.connect(
  '"mongodb+srv://vlad:vlad@cluster0.0ibp3.gcp.mongodb.net/bug-tracker-DB?retryWrites=true&w=majority"',
  { useNewUrlParser: true }
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
module.exports = conn;

// const mongoose = require("mongoose");

// // Connect to mongoose
// mongoose.connect(
//   "mongodb+srv://vlad:vlad@cluster0.0ibp3.gcp.mongodb.net/bug-tracker-DB?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

// // const mongoose = require("mongoose");

// // const connetion = mongoose.connect(process.env.MONGO, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// const logConnection = () => {
//   mongoose.connection
//     .once("open", () => {
//       console.log("successfully connected to DB");
//     })
//     .on("error", (err) => {
//       console.log("Error occured: ", err);
//     });
// };
// logConnection();

// const express = require("express");
// const router = express.Router();

// router.use("/", async (req: any, res: any) => {
//   const bugs = await connetion();
//   res.send(await bugs.find({}).toArray());
// });
