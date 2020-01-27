const express = require("express")
const router = express.Router()
const user = require("../models/User");

// Creating User
router.get("/:userID", (req, res) => {
      user.find({ empID: req.params.empID }).then(users =>
      res.json(users)
    );
  });
// Deleteing User 
router.delete("/:userID", (req, res) => {
    let userID = req.params.userID
    user.findOneAndDelete({userID})
    .then(users => res.json(users));
  });

// Updating User 
router.put("/:userID", (req, res) => {
    let userData = req.body
    let userID = req.params.userID
    user.findOneAndUpdate({userID}, userData, { new: true})
      .then(users => res.json(users));
  });
//    Insertion  the record
    router.post("/", (req, res) => {
        console.log("Creation of record .........")
        user.create(req.body).then(users => res.json(users));
       });
     module.exports = router

