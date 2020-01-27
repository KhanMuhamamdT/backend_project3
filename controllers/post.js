const mongoose = require('mongoose');
const express = require('express');

const user = require('../models/Post');

//get a list of all trainers
router.get("/", (req, res) => {
    user.find({})
    .then(allUsers => res.json(allUsers));
})

//get a specific trainer by name
router.get("/:name", (req, res) => {
    User.find({ name: req.params.name })
    .then(User => res.json(User))
})

//modify a specific trainer by name
router.put("/:name", (req, res) => {
    User.findOneAndUpdate({ name: req.params.name }, req.body, {
        new: true
    }).then(User => res.json(User));
});

//create a new trainer
router.post("/", (req, res) => {
    const newUser = req.body;
    User.create(req.body)
    .then(User => res.json(User));
});

//delete a trainer
router.delete("/:name", (req, res) => {
    User.findOneAndDelete({ name: req.params.name })
    .then(User => {
        res.json(User);
    });
});
