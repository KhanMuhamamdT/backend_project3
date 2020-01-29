const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

const Post = require('../models/Post');

router.get("/", (req, res) => {
    Post.find({})
    .then(allPosts => res.json(allPosts));
})

// get post by name
router.get("/:title", (req, res) => {
    Post.find({ title: req.params.title })
    .then(Post => res.json(Post))
})

// update a post
router.put("/:title", (req, res) => {
    Post.findOneAndUpdate({ title: req.params.title }, req.body, {
        new: true
    }).then(Post => res.json(Post));
});

// create a post
router.post("/", (req, res) => {
    const newPost = req.body;
    Post.create(req.body)
    .then(Post => res.json(Post));
});

//findby user using post-author
router.get("/:name/posts", (req, res) => {
    Post.find({ userid: req.params.name })
    .then(Post => res.json(Post));
});

//delete a post
router.delete("/:name", (req, res) => {
    User.findOneAndDelete({ name: req.params.name })
    .then(Post => {
        res.json(Post);
    });
});
module.exports = router

