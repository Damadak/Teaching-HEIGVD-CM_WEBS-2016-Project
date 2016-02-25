var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

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

// PUT /api/users/:id
router.put('/:id', findUser, function(req, res, next) {
  User.findById(req.user, function(err, user) {
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.email = req.body.email;
    user.userName = req.body.userName;
    user.password = req.body.password;
    var now = new Date();
    user.updatedAt = now;
    user.phoneNumber = req.body.phoneNumber;
    user.adresse.street = req.body.adresse.street;
    user.adresse.number = req.body.adresse.number;
    user.adresse.postal = req.body.adresse.postal;
    user.adresse.country = req.body.adresse.country;
    user.role.citizen = req.body.role.citizen;
    user.role.staff = req.body.role.staff;

    user.save(req.body, function(err, updatedUser){
      res.send(updatedUser);
    });
  });
});

// DELETE /api/people/:id
router.delete('/:id', findUser, function(req, res, next) {
  User.remove({_id: req.user}, function(err, data) {
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
