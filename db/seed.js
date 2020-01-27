const mongoose = require('./connection')
const User = require('../models/User')
 const Post = require('../models/Post')
 const Comment = require('../models/Comment')
// clear the database of records using both models

// clear the database of records using both models
User.deleteMany({}).then(() => {
  console.log('deleted all users')
  Post.deleteMany({}).then(() => {
    console.log('deleted all Posts')
    Comment.deleteMany({}).then(() => {
        console.log('deleted all Comment')
    // create a user
    User.create({
        name: "Muhamamd Khan",
        description: "My likings",

    })
    .then(paul => {
      // create the posts
      Post.create({
       url: "Breakfast.com",
        title: "Breakfast",
        info: "Brooklyn Avn",
        likes: 11,
        userid: paul.id
      })


      // create comment
      .then(comts => {
        Comment.create({
        body: "Excellent Picture ",
        users: paul.id,
        posts: comts.id
      })
    })

    .then(ms => {
      paul.mylikes.push(ms)
      paul.save()
      console.log('created Paul:Microsoft')
    })
    
      // create the posts
      Post.create({
        url: "Lunch.com",
        title: "Lunch menu",
        info: "City Area",
       likes:22,
        userid: paul.id
      })
      // create comment

         .then(comts => {
        Comment.create({
        body: "Excellent Picture ",
        users: paul.id,
        posts: comts.id
      })
    })
})
   
})
      })
    })
    console.log ('Successful .................')