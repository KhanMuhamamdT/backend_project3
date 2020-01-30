const morgan = require('morgan')
const express = require('express');
const parser = require("body-parser");
const app = express();
const cors = require('cors')
const usersController = require('./controllers/user');
const postsController = require('./controllers/post');
const commentsController = require('./controllers/comment');

// interprets key value pairs in URLs
app.use(parser.urlencoded({ extended: true }));
// converts a json string to the an object and attaches it to req.body
 app.use(parser.json());
 app.use(cors())
 app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.redirect('/api/users')
});


//users controller
app.use('/api/users', usersController);

//posts controller
app.use('/api/posts', postsController);

//comments controller
app.use('/api/comments', commentsController)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});