const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment");
// this is the default route for returning all the records 
console.log('Comment controller')
router.get("/", (req, res) => {
  console.log ('comments path')  
  Comment.find({}).then(comments => res.json(comments));
})
// Getting comments information 
router.get("/:comment", (req, res) => {
      Comment.find({ posts: req.params.comment }).then(posts =>
      res.json(posts)
    );
  });
// Deleteing cooments 
router.delete("/:comment", (req, res) => {
    let posts = req.params.comment
    Comment.findOneAndDelete({postID})
    .then(comments => res.json(comments));
  });

// Updating comment 
router.put("/:comment", (req, res) => {
    let userData = req.body
    let posts = req.params.userID
    Comment.findOneAndUpdate({posts}, userData, { new: true})
      .then(comments => res.json(comments));
  });
//    Insertion  the comment
    router.post("/", (req, res) => {
        console.log("Creation of record .........")
        Comment.create(req.body).then(comments => res.json(comments));
       });
     module.exports = router

