const mongoose = require("../db/connection");
const postSchema = mongoose.Schema({
  url: String,
  title: String,
  info: String,
  userid: 
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    }
  
//   , coments: [
//     {
//       ref: "Comment",
//       type: mongoose.Schema.Types.ObjectId
//     }
//   ]

});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;