import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: [true, "Name is required"] },
  email: { type: String, required: [true, "Enter an email"] },
  password: String,
  registredAt: Date,
  comments: String,
  hash: String,
  salt: String,
  issues: [{ type: Schema.Types.ObjectId, ref: "issue" }],
});
const User = mongoose.model("user", userSchema);

// more on that https://thinkster.io/tutorials/node-json-api/creating-the-user-model
