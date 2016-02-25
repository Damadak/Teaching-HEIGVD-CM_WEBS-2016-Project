var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  _=require("underscore");

  module.exports = function (app) {
  app.use('/api/users', router);
};

/*
{
  "name": "",
  "lastName": "",
  "email": "",
  "userName": "",
  "password": "",
  "phoneNumber": "",
  "adresse": {
    "street": "",
    "number": "",
    "postal": "",
    "country": ""
  },
  "role": {
    "citizen": "",
    "staff": ""
  }
}

*/

/**
 * @api {post} /user Create a user
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiSuccess {String} age Age of the person.
 */
router.post('/', function (req, res, next) {

  var user = new User(req.body);
  var now = new Date();
  user.createdAt = now;

  user.save(function (err, createdUser) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(createdUser);
  });
});

// GET /api/users
router.get('/', function (req, res, next) {
  User.find(function(err, users) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(users);
  });
});

function findUser(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!user) {
      res.status(404).send('User not found');
      return;
    }
    req.user = user;
    next();
  });
}

// GET /api/users/:id
router.get('/:id', findUser, function(req, res, next) {
    res.send(req.user);
});

// PATCH /api/users/:id
router.patch('/:id', findUser, function(req, res, next) {
  /*if(req.body.name){
    req.user.name = req.body.name;
  }
  if(req.body.lastName){
    req.user.lastName = req.body.lastName;
  }
  if(req.body.age){
    req.user.age = req.body.age;
  }
  if(req.body.email){
    req.user.email = req.body.email;
  }
  if(req.body.userName){
    req.user.userName = req.body.userName;
  }
  if(req.body.password){
    req.user.password = req.body.password;
  }
  if(req.body.phoneNumber){
    req.user.phoneNumber = req.body.phoneNumber;
  }*/

  var adresse = _.clone(req.user.adresse);
  _.extend(req.user, req.body);

  if(req.body.adresse){
    req.user.adresse = _.extend(adresse, req.body.adresse);
  }

    var now = new Date();
    req.user.updatedAt = now;

    req.user.save(function(err, updatedUser){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send(updatedUser);
    });

});

// DELETE /api/people/:id
router.delete('/:id', findUser, function(req, res, next) {
  User.remove({_id: req.user}, function(err, data) {
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
