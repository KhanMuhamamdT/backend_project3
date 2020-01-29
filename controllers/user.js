const express = require("express")
const router = express.Router()
const User = require("../models/User");

// this is the default route for returning all the records 
router.get("/", (req, res) => {
  console.log( 'default path get') 
  User.find({}).then(users => res.json(users));
})
// Getting User information 
// "Test case">> "http://localhost:8080/api/users/MK"
router.get("/:userID", (req, res) => {
  console.log('Getting user information wwith search critera')  
  console.log(req.params.userID)
  User.find({ userID: req.params.userID })
  .then(users =>res.json(users)
    );
  });
// Deleteing User 
// "Test case">> "http://localhost:8080/api/users/MK"
router.delete("/:userID", (req, res) => {
    console.log(req.params.userID)
    User.findOneAndDelete({userID: req.params.userID })
    .then(users =>  res.json(users));
  });

// Updating User 
router.put("/:userID", (req, res) => {
 let userdata = req.body
 let userID = req.params.userID
User.findOneAndUpdate({userID}, userdata, { new: true})
   .then(users => res.json(users));
    });
//    Insertion  the record
router.post("/", (req, res) => {
        console.log("Creation of record .........")
        User.create(req.body).then(users => res.json(users));
       });
     module.exports = router

