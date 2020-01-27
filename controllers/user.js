const express = require("express")
const router = express.Router()
const User = require("../models/User");

// this is the default route for returning all the records 
router.get("/", (req, res) => {
    User.find({}).then(users => res.json(users));
})

// Getting User information 
router.get("/:userID", (req, res) => {
      User.find({ userID: req.params.userID }).then(users =>
      res.json(users)
    );
  });
// Deleteing User 
router.delete("/:userID", (req, res) => {
    let userID = req.params.userID
    User.findOneAndDelete({userID})
    .then(users => res.json(users));
  });

// Updating User 
router.put("/:userID", (req, res) => {
    let userData = req.body
    let userID = req.params.userID
    User.findOneAndUpdate({userID}, userData, { new: true})
      .then(users => res.json(users));
  });
//    Insertion  the record
    router.post("/", (req, res) => {
        console.log("Creation of record .........")
        User.create(req.body).then(users => res.json(users));
       });
     module.exports = router

