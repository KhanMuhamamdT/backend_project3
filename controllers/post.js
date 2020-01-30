const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

//get a list of all trainers
router.get("/", (req, res) => {
  Post.find({}).then(allPosts => res.json(allPosts));
});

// get post by name
// ALDO: changed to look for _id and changed param to postID
router.get("/:postID", (req, res) => {
  Post.find({ _id: req.params.postID }).then(post => res.json(post));
});

// update a post
// ALDO: changed to use postID same as above
router.put("/:postID", (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.postID }, req.body, {
    new: true
  }).then(post => res.json(post));
});

// create a post
router.post("/", (req, res) => {
  Post.create(req.body).then(post => res.json(post));
});

//findby user using post-author
router.get("/:name/posts", (req, res) => {
  Post.find({ userid: req.params.name }).then(Post => res.json(Post));
});

//delete a post
router.delete("/:name", (req, res) => {
  User.findOneAndDelete({ name: req.params.name }).then(Post => {
    res.json(Post);
  });
});
module.exports = router;
