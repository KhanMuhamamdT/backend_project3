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
       userID : "MK", 
       name: "Muhamamd Khan",
       description: "My pinterest",
    })
    .then(post => {
      // create the posts
      Post.create({
       url: "Breakfast.com",
        title: "Breakfast",
        info: "Brooklyn Avn",
        likes: 11,
        userid: post.id
      })


      // create comment
      .then(comts => {
        Comment.create({
        body: "Excellent Picture ",
        users: post.id,
        posts: comts.id
      })
    })

    .then(ms => {
      post.mylikes.push(ms)
      post.save()
      console.log('created Paul:Microsoft')
    })
    
      // create the posts
      Post.create({
        url: "Lunch.com",
        title: "Lunch menu",
        info: "City Area",
       likes:22,
        userid: post.id
      })


      
      // create comment

         .then(comts => {
        Comment.create({
        body: "Excellent Picture ",
        users: post.id,
        posts: comts.id
      })
    })
})
   
})
      })
    })
    console.log ('Successful .................')