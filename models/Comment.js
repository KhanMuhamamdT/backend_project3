const mongoose = require("../db/connection");
const commentSchema = mongoose.Schema({
  body: String,
    users: 
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    }
  ,
  posts: 
    {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId
    }
  });
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
