# Not Pinterest | Backend

NotPinterest is a site built for friends. It's a place for you to share the things you most enjoy with an ultra exclusive crowd. If you found a recipe, or even a fun picture you liked then you can share it right here! Give it a description, title, and watch as it racks up likes!

## Features:
- Users
- detailed posts
- Share images and URLs

## Technologies used:
- Backend
  - Express
  - Mocha, chai, supertest (for testing)
  - NPM
  -Deployed on Heroku
  -MongoDB hosted on MongoAtlas
-Frontend
  - React
  - API backend using fetch
  - Enzyme
  - NPM

## Install instructions
- Clone this repo and the [frontend](https://github.com/KhanMuhamamdT/frontend_project3)
- cd into this repo
- 'npm install'
- start mongodb
- 'node db/seed.js'
- 'node index.js'
- The backend should be started! Now go to the directory with the frontend
- 'npm install'
- 'npm start'

## Contributing!

First of all thank you for your interest in contributing! There are two separate repositories for use, this is just representing the backend repo. The frontend repo is located [here](https://github.com/KhanMuhamamdT/frontend_project3)! Additions must be made via pull requests. Fork, then clone this repository, add your changes, and submit a pull request. These will be reviewed and approved on a per-case basis as time permits.

## Functionalities:

- Will have users
- Users can make posts
- Posts will be displayed on front page
- User can click on posts from front page to view further details

## Bonus

- User signin
- User likes on other posts

<hr>

## Backend

- Using Express
- Routes ‘/’ homepage
- /:post-id/comments
  - GET getContent
  - PUT edit
  - POST Create
  - DELETE delete
- ‘/:post-id’ post
  - GET getContent
  - PUT edit
  - POST create
  - DELETE delete
- ‘/:user-id’ user
  - GET getContent
  - PUT edit
  - POST create
  - DELETE delete

## Models

### Comment

- User
- Post

### Users

- Name
- Likes
- Posts - array of refs to posts
- Description

### Post model

- Url
- Title
- Info
- Ref to comments
- upvotes?

### Comments model

- Body
- Post-id ref
- User-id ref

## Database (db)

Connection.js  
Seed.js  
Models  
Db:name = notPinterest_db
