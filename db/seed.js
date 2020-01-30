const mongoose = require("./connection");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
// clear the database of records using both models

// clear the database of records using both models
User.deleteMany({}).then(() => {
  console.log("deleted all users");
  Post.deleteMany({}).then(() => {
    console.log("deleted all Posts");
    Comment.deleteMany({}).then(() => {
      console.log("deleted all Comment");
      // create a user
      User.create({
        userID: "MK",
        name: "Muhamamd Khan",
        description: "My likings"
      }).then(paul => {
        // create the posts
        Post.create({
          url:
            "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
          title: "Breakfast",
          info: "Brooklyn Avn",
          likes: 11,
          userID: paul.id
        })

          // create comment
          .then(comts => {
            Comment.create({
              body: "Excellent Picture ",
              users: paul.id,
              posts: comts.id
            });
          })

        // create the posts
        Post.create({
          url: "Lunch.com",
          title: "Lunch menu",
          info: "City Area",
          likes: 22,
          userID: paul.id
        })

          // create comment

          .then(comts => {
            Comment.create({
              body: "Excellent Picture ",
              users: paul.id,
              posts: comts.id
            });
          });
      });
    });
  });
});
console.log("Successful .................");
