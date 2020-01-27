const express = require('express');
const app = express();
const userController = require('./controllers/user');
const postController = require('./controllers/post');
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
    res.redirect(/api/posts);
});
app.use('/api/posts', postsController);

//comments controller
app.get('/api/comments', (req, res) => {
    res.redirect(/api/comments);
});
app.use('api/comments', commentsController)

app.listen(8080, () => console.log("Running on port 8080!"));