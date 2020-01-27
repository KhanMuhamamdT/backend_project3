const express = require('express');
const app = express();
const userController = require('./controllers/User');
const postController = require('./controllers/Post');
const commentController = require('Comment');

app.get('/', (req, res) => {
    res.redirect(/api/users)
});


//users controller
app.get('/api/users', (req, res) => {
    res.redirect(/api/users);
});
app.use('/api/users', usersController);

//posts controller
app.get('/api/posts', (req, res) => {
    res.redirect(/api/users);
});
app.use('/api/posts', postsController);

//comments controller
app.get('/api/comments', (req, res) => {
    res.redirect(/api/users);
});
app.use('api/comments', commentsController)

app.listen(3000, () => console.log("Running on port 3000!"));