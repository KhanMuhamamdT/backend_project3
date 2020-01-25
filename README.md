###### Not Pinterest

* Will have users
* Users can make posts
* Posts will be displayed on front page
* User can click on posts from front page to view further details

## Bonus
* User signin
* User likes on other posts


### Backend
* Using Express
* Routes ‘/’ homepage
* /:post-id/comments
  * GET getContent
  * PUT edit
  * POST Create
  * DELETE delete
* ‘/:post-id’ post
  * GET getContent
  * PUT edit
  * POST create
  * DELETE delete
* ‘/:user-id’ user
  * GET getContent
  * PUT edit
  * POST create
  * DELETE delete


### Controllers
Comment
User
Post
Users model
Name
Likes
Posts - array of refs to posts
Description
Post model
Url
Title
Info
Ref to comments
upvotes?
Comments model
Body
Post-id ref
User-id ref

### DB 
Connection.js
Seed.js
Models
Db:name = notPinterest_db

