const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");

//get a list of all posts
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
// ALDO: changed and tested. Now also updates user with new post
router.post("/", (req, res) => {
  //   Post.create(req.body).then(post => res.json(post));
  Post.create(req.body).then(post => {
    User.find({ _id: post.userid }).then(user => {
      user.myPosts.push(post._id);
      user.save();
    });
    res.json(post);
  });
});

//findby user using post-author
router.get("/:name/posts", (req, res) => {
  Post.find({ userid: req.params.name }).then(post => res.json(post));
});

//delete a post
// ALDO: fixed and used postID to delete
router.delete("/:postID", (req, res) => {
  Post.findOneAndDelete({ _id: req.params.postID }).then(post => {
    res.json(post);
  });
});

module.exports = router;
