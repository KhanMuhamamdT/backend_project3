const mongoose = require("../db/connection");
const UserSchema = mongoose.Schema({
  userID: String,
  name: String,
  description: String,
  profilePicURL: String,
  // ALDO: changed mylikes and re-used as myPosts
  myPosts: [
    {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
  // mylikes: [
  //   {
  //     ref: "Post",
  //     type: mongoose.Schema.Types.ObjectId
  //   }
  // ]
  // likes as models? likes = collection of users who have liked the post.

  //   postid: [
  //     {
  //       ref: "Post",
  //       type: mongoose.Schema.Types.ObjectId
  //     }
  //   ]
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
