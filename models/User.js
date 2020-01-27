const mongoose = require("../db/connection");
const UserSchema = mongoose.Schema({
  userID : String,
  name: String,
  description: String,
  mylikes: [
    {
      
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
  
//   postid: [
//     {
//       ref: "Post",
//       type: mongoose.Schema.Types.ObjectId
//     }
//   ]

});
const User = mongoose.model("User", UserSchema);
module.exports = User;
