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
// https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1
// https://www.youtube.com/watch?v=kjKR0q8EBKE
