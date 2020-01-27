const mongoose = require("../db/connection");
const UserSchema = mongoose.Schema({
  name: String,
  likes: Number,
  description: String
//   postid: [
//     {
//       ref: "Post",
//       type: mongoose.Schema.Types.ObjectId
//     }
//   ]

});
const User = mongoose.model("User", UserSchema);
module.exports = User;
