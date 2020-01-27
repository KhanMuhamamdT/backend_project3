const express = require('express');
const app = express();
const usersController = require('./controllers/user');
const postsController = require('./controllers/post');
const commentsController = require('./controllers/comment');

app.get('/', (req, res) => {
    res.redirect('/api/users')
});


//users controller
app.use('/api/users', usersController);

//posts controller
app.use('/api/posts', postsController);

//comments controller
app.use('api/comments', commentsController)

app.listen(8080, () => console.log("Running on port 8080!"));