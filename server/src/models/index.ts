const mongoose = require("mongoose");
export { connectDb };

// Connect to DB
const connectDb = () => {
  return mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

const db = mongoose.connection;
db.once("open", () => console.log("connected to database!"));

// const bugs = require("../server/routes/api/bugs");
// const app = import("../app");
// app.use("/", bugs);
