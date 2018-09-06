const User = require('../models/user');


// for dev purposes to get random ID in insomnia
function userIndex( req, res, next ){
  User
    .find()
    .then(users => res.json(users))
    .catch(next);
}

//---------- USER---------------//
function userShow( req, res, next ){
// GET to /users/:id
  User
    .findById(req.params.id)
    .populate('followers following exercisePrograms')
    .then(user => res.json(user))
    .catch(next);

  // get all user data for one user, used for profile and dashboard
  // populates the followers, following and exercisePrograms arrays
  // returns an object to the client with all the users data
}

function userUpdate( req, res, next ){
// PUT to /users/:id
  User
    .findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.status(201).json(user)) //201 is created
    .catch(next);

  //update a user profile
  // send the updated user object back to the client
  // NOTE:  we may need to populate the three arrays again here.
  // EG: .then(event => Event.populate(event, { path: 'guests'}))
}

function userDelete( req, res, next ){
  // DELETE /user/:id
  User
    .findById(req.params.id)
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

//---------- APPLICATION-----------//
function addUserGrit( req, res, next ){
  // POST /users/:id/grit
  User
    .findById(req.params.id)
    .then(user => {
      user.dailyGrit.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
  // pushes an object into the daily grit array
  // body needs to be an object containing a date and a grit number
}

//------------- SOCIAL ------------//
function userFollowCreate( req, res, next ){
  // POST to /users/:id/follow   with body of user to follow;

  //add the other user to the users following array
  //add the user to the other users followers array
}

function userFollowDelete( req, res, next ){
  // POST to /users/:id/follow   with body of user to follow;

  //remove the other user from the users following array
  //remove the user from the other users followers array
}

function userFollowIndex( req, res, next ){
  // GET /users/:id/follow

  // get the user model populate it its follower and following arrays
}

module.exports = {
  //primary user routes
  index: userIndex,
  show: userShow,
  update: userUpdate,
  delete: userDelete,

  // Application
  createGrit: addUserGrit,

  //social
  createFollow: userFollowCreate,
  deleteFollow: userFollowDelete,
  followIndex: userFollowIndex   // NOTE: this could be the same as GET users
};
