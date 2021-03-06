var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
User = mongoose.model('User'),
Issue=mongoose.model('Issue'),
_=require("underscore"), util = require('util');

module.exports = function (app) {
  app.use('/api/users', router);
};

/**
  * @api {get} /users Get all the Users
  * @apiVersion 0.0.0
  * @apiName GetUsers
  * @apiGroup User
  *
  * @apiDescription This allow to get all the existed users on the server
  *
  * @apiExample Example usage :
  *{
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
  *
  * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
  * @apiSuccess {String}   name   The name of the user
  * @apiSuccess {String}   lastname   The lastname of the user
  * @apiSuccess {String}   email   The email of the user
  * @apiSuccess {String}   username   The username of the user
  * @apiSuccess {String}   password   The password of the user
  * @apiSuccess {Date}   createdAt The date of the creation of the user
  * @apiSuccess {Number}   phoneNumber   The phone number of the user
  * @apiSuccess {{}}   adresse   The adresse of the user
  * @apiSuccess {String}   adresse.street   The street of the user
  * @apiSuccess {Number}   adresse.number   The number street of the user
  * @apiSuccess {Number}   adresse.postal   The postal code of the user
  * @apiSuccess {String}   adresse.country   The country of the user
  * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
  * @apiSuccess {Boolean}   role.staff   If the user is a staff
  *
  * @apiSuccessExample Success-Response:
  *     {
   "__v": 0,
   "createdAt": "2016-03-03T19:27:06.372Z",
   "name": "Tab",
   "lastName": "H",
   "email": "test@gmail.com",
   "userName": "Tabata",
   "password": "123456",
   "phoneNumber": 22456789,
   "_id": "56d8900a05bd2b841f89139f",
   "role": {
     "citizen": true,
     "staff": false
   },
   "adresse": {
     "street": "Route",
     "number": 38,
     "postal": 1258,
     "country": "Suisse"
   }
  }
  *
  * @apiError Error404   The server has an unexpected error
  *
  */
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


/**
Issue.find({ 'actions.status': "solved" }, function(err, issues.actions){
    if(err){
      res.status(500).send(err);
      return;
    }
    res.send(issues.actions);

});
**/

/**
 * @api {get} /users/mostIssuesCreatedByUser Get the Users with the most Issues
 * @apiVersion 0.0.0
 * @apiName GetMostIssuesUsers
 * @apiGroup User
 *
 * @apiDescription This allow to filter the users by the number of the most issues posted
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
 * @apiSuccess {String}   name   The name of the user
 * @apiSuccess {String}   lastname   The lastname of the user
 * @apiSuccess {String}   email   The email of the user
 * @apiSuccess {String}   username   The username of the user
 * @apiSuccess {String}   password   The password of the user
 * @apiSuccess {Date}   createdAt The date of the creation of the user
 * @apiSuccess {Number}   phoneNumber   The phone number of the user
 * @apiSuccess {{}}   adresse   The adresse of the user
 * @apiSuccess {String}   adresse.street   The street of the user
 * @apiSuccess {Number}   adresse.number   The number street of the user
 * @apiSuccess {Number}   adresse.postal   The postal code of the user
 * @apiSuccess {String}   adresse.country   The country of the user
 * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
 * @apiSuccess {Boolean}   role.staff   If the user is a staff
 *
 * @apiSuccessExample Success-Response:
 *     [{
  "__v": 0,
  "createdAt": "2016-03-03T19:27:06.372Z",
  "name": "Tab",
  "lastName": "H",
  "email": "test@gmail.com",
  "userName": "Tabata",
  "password": "123456",
  "phoneNumber": 22456789,
  "_id": "56d8900a05bd2b841f89139f",
  "role": {
    "citizen": true,
    "staff": false
  },
  "adresse": {
    "street": "Route",
    "number": 38,
    "postal": 1258,
    "country": "Suisse"
  }
}]
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
//get /api/users/mostIssuesCreatedByUser
router.get('/mostIssuesCreatedByUser', function (req, res, next) {
  Issue.aggregate([{
    $group: {
      _id: "$author",
      nbIssues:{$sum:1}}},
      {
        $sort : {nbIssues:-1}}],
         function(err, results) {

          if (err){
            res.status(500).send(err);
            return;
          }
        res.send(results);
    });
  });

  /**
   * @api {get} /users/mostIssuesSolvedByUser Get the Users with the most Issues solved
   * @apiVersion 0.0.0
   * @apiName GetMostIssuesSolvedUsers
   * @apiGroup User
   *
   * @apiDescription This allow to filter the users by the number of issues solved
   *
   * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
   * @apiSuccess {String}   name   The name of the user
   * @apiSuccess {String}   lastname   The lastname of the user
   * @apiSuccess {String}   email   The email of the user
   * @apiSuccess {String}   username   The username of the user
   * @apiSuccess {String}   password   The password of the user
   * @apiSuccess {Date}   createdAt The date of the creation of the user
   * @apiSuccess {Number}   phoneNumber   The phone number of the user
   * @apiSuccess {{}}   adresse   The adresse of the user
   * @apiSuccess {String}   adresse.street   The street of the user
   * @apiSuccess {Number}   adresse.number   The number street of the user
   * @apiSuccess {Number}   adresse.postal   The postal code of the user
   * @apiSuccess {String}   adresse.country   The country of the user
   * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
   * @apiSuccess {Boolean}   role.staff   If the user is a staff
   *
   * @apiSuccessExample Success-Response:
   *     [{
    "__v": 0,
    "createdAt": "2016-03-03T19:27:06.372Z",
    "name": "Tab",
    "lastName": "H",
    "email": "test@gmail.com",
    "userName": "Tabata",
    "password": "123456",
    "phoneNumber": 22456789,
    "_id": "56d8900a05bd2b841f89139f",
    "role": {
      "citizen": true,
      "staff": false
    },
    "adresse": {
      "street": "Route",
      "number": 38,
      "postal": 1258,
      "country": "Suisse"
    }
  }]
   *
   * @apiError Error404   The server has an unexpected error
   *
   */
//get /api/users/mostIssuesSolvedByUser
router.get('/mostIssuesSolvedByUser', function (req, res, next) {
  Issue.aggregate([{
    $match: {status: "solved"}},
    {
      $group: {
        _id: "$assignedTo",nbIssues:{$sum:1}}},
        {
         $sort : {nbIssues:-1}}],
          function(err, results) {
            if (err){
               res.status(500).send(err);
               return;
          }
        res.send(results);
    });
  });

  /**
   * @api {get} /users/leastIssuesAssignedTo Get the Users with the least Issues assigned
   * @apiVersion 0.0.0
   * @apiName GetLeastIssuesUsers
   * @apiGroup User
   *
   * @apiDescription This allow to filter the users who have the least issues
   *
   * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
   * @apiSuccess {String}   name   The name of the user
   * @apiSuccess {String}   lastname   The lastname of the user
   * @apiSuccess {String}   email   The email of the user
   * @apiSuccess {String}   username   The username of the user
   * @apiSuccess {String}   password   The password of the user
   * @apiSuccess {Date}   createdAt The date of the creation of the user
   * @apiSuccess {Number}   phoneNumber   The phone number of the user
   * @apiSuccess {{}}   adresse   The adresse of the user
   * @apiSuccess {String}   adresse.street   The street of the user
   * @apiSuccess {Number}   adresse.number   The number street of the user
   * @apiSuccess {Number}   adresse.postal   The postal code of the user
   * @apiSuccess {String}   adresse.country   The country of the user
   * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
   * @apiSuccess {Boolean}   role.staff   If the user is a staff
   *
   * @apiSuccessExample Success-Response:
   *     [{
    "__v": 0,
    "createdAt": "2016-03-03T19:27:06.372Z",
    "name": "Tab",
    "lastName": "H",
    "email": "test@gmail.com",
    "userName": "Tabata",
    "password": "123456",
    "phoneNumber": 22456789,
    "_id": "56d8900a05bd2b841f89139f",
    "role": {
      "citizen": true,
      "staff": false
    },
    "adresse": {
      "street": "Route",
      "number": 38,
      "postal": 1258,
      "country": "Suisse"
    }
  }]
   *
   * @apiError Error404   The server has an unexpected error
   *
   */
//get /api/users/leastIssuesAssignedTo
router.get('/leastIssuesAssignedTo', function (req, res, next) {
  Issue.aggregate([{
    $match: {
     $or: [{status:{$ne: "solved"}},
    {status: {$ne: "rejected"}} ]}},
    {$group:
      {_id: "$assignedTo",nbIssues:{$sum:1}}},
    { $sort : {nbIssues:-1}}],
       function(err, results) {
        if (err){
          res.status(500).send(err);
          return;
        }
      res.send(results);
    });
  });



/**
 * @api {get} /users/:id/issues Get all the issues posted by a user
 * @apiVersion 0.0.0
 * @apiName GetUserIssues
 * @apiGroup User
 *
 * @apiDescription This allow to get all the issues of a user with its id
 *
 * @apiExample Example usage:
 * http://localhost/users/56cece584a9f5ac80f820b68/issues
 *
 * @apiSuccess {Schema.Types.ObjectId}   author            The Author-Id who create the Issue
 * @apiSuccess {Schema.Types.ObjectId} type     The Type-Id of the Issue
 * @apiSuccess {Schema.Types.ObjectId[]}   tags       The Tag-Id related to the Issue
 * @apiSuccess {String}   description   The description of the Issue
 * @apiSuccess {String}   location The type of the geographic coordinates
 * @apiSuccess {Number[]} location.coordinates       The geographic coordinates of the Issue
 * @apiSuccess {String}   status  The status of the Issue
 * @apiSuccess {[]}   actions The actions done on the Issue
 * @apiSuccess {String}   actions.type The type of the action (Comment or Status Change)
 * @apiSuccess {Schema.Types.ObjectId}   actions.author The Author-Id of the action
 * @apiSuccess {Date}   actions.date The date of the action
 * @apiSuccess {String}   actions.status The new status of the issue (only if its a Status Change)
 * @apiSuccess {String}   actions.content The content of the comment (only if its a Comment)
 * @apiSuccess {Date}   createdAt The date of creation of the issue
 *
 * @apiSuccessExample Success-Response:
 *     [
        {
          "_id": "56cece584a9f5ac80f820b68",
          "keyword": "route abimée",
          "__v": 0
        }
      ]
 *
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError NotFound  The user doesn't exist
 *
 */
//GET /api/users/id/issues
router.get('/:id/issues', findUser, function(req, res, next){
  Issue.find({"author":req.params.id},function(err, issues){
    res.send(issues);
  });

});

/**
 * @api {post} /users Create a User
 * @apiVersion 0.0.0
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiDescription This allow to create a user with the right parameters
 *
 *@apiExample Example usage :
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
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
 * @apiSuccess {String}   name   The name of the user
 * @apiSuccess {String}   lastname   The lastname of the user
 * @apiSuccess {String}   email   The email of the user
 * @apiSuccess {String}   username   The username of the user
 * @apiSuccess {String}   password   The password of the user
 * @apiSuccess {Date}   createdAt The date of the creation of the user
 * @apiSuccess {Number}   phoneNumber   The phone number of the user
 * @apiSuccess {{}}   adresse   The adresse of the user
 * @apiSuccess {String}   adresse.street   The street of the user
 * @apiSuccess {Number}   adresse.number   The number street of the user
 * @apiSuccess {Number}   adresse.postal   The postal code of the user
 * @apiSuccess {String}   adresse.country   The country of the user
 * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
 * @apiSuccess {Boolean}   role.staff   If the user is a staff
 *
 * @apiSuccessExample Success-Response:
 *     {
  "__v": 0,
  "createdAt": "2016-03-03T19:27:06.372Z",
  "name": "Tab",
  "lastName": "H",
  "email": "test@gmail.com",
  "userName": "Tabata",
  "password": "123456",
  "phoneNumber": 22456789,
  "_id": "56d8900a05bd2b841f89139f",
  "role": {
    "citizen": true,
    "staff": false
  },
  "adresse": {
    "street": "Route",
    "number": 38,
    "postal": 1258,
    "country": "Suisse"
  }
}
 *
 * @apiError ValidationError The parameters don't have the correct type or there are missing required parameters
 * @apiError Error404   The server has an unexpected error
 *
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



/**
 * @api {function} /users Create the array to count the number of Issues posted by an User
 * @apiVersion 0.0.0
 * @apiName CreateArrayIssuesUser
 * @apiGroup User
 *
 * @apiDescription This allow create the array to count the number of Issues posted by an User
 *
 */
function getUser(id, users) {
  for (var i = 0; i < users.length; i++) {
    if (users[i]._id.toString() == id) {
      return users[i];
    }
  }

  return null;
}


/**
 * @api {function} /users Count the issue of an user
 * @apiVersion 0.0.0
 * @apiName CountIssuesUser
 * @apiGroup User
 *
 * @apiDescription This allow to count the issues of an User
 *
 */
function countAuthorIssues(callback){
  Issue.aggregate([
  {
    $group:{
      _id:'$author',
      total:{$sum:1}
    }
  },
  {
    $sort:{total:-1}
  }
  ], function(err, issueCounts){
    if(err){
      callback(err);
    }else{
      callback(undefined, issueCounts);
      console.log("coucou");

    }
  });
}

/**
 * @api {function} /tags Verify the User exists
 * @apiVersion 0.0.0
 * @apiName VerifyUser
 * @apiGroup User
 *
 * @apiDescription This allow to test if the user sended is on the server. This function is used in all the routes who need tag verification
 *
 * @apiExample Example usage:
 * http://localhost/tags/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
 * @apiSuccess {String}   name   The name of the user
 * @apiSuccess {String}   lastname   The lastname of the user
 * @apiSuccess {String}   email   The email of the user
 * @apiSuccess {String}   username   The username of the user
 * @apiSuccess {String}   password   The password of the user
 * @apiSuccess {Date}   createdAt The date of the creation of the user
 * @apiSuccess {Number}   phoneNumber   The phone number of the user
 * @apiSuccess {String}   adresse.street   The street of the user
 * @apiSuccess {Number}   adresse.number   The number street of the user
 * @apiSuccess {Number}   adresse.postal   The postal code of the user
 * @apiSuccess {String}   adresse.country   The country of the user
 * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
 * @apiSuccess {Boolean}   role.staff   If the user is a staff
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
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

  /**
   * @api {get} /users/:id Find a specific User
   * @apiVersion 0.0.0
   * @apiName FindUser
   * @apiGroup User
   *
   * @apiDescription This allow to get a specific user with its id
   *
   * @apiExample Example usage:
   * http://localhost/users/56cece584a9f5ac80f820b68
   *
   * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
   * @apiSuccess {String}   name   The name of the user
   * @apiSuccess {String}   lastname   The lastname of the user
   * @apiSuccess {String}   email   The email of the user
   * @apiSuccess {String}   username   The username of the user
   * @apiSuccess {String}   password   The password of the user
   * @apiSuccess {Date}   createdAt The date of the creation of the user
   * @apiSuccess {Number}   phoneNumber   The phone number of the user
   * @apiSuccess {{}}   adresse   The adresse of the user
   * @apiSuccess {String}   adresse.street   The street of the user
   * @apiSuccess {Number}   adresse.number   The number street of the user
   * @apiSuccess {Number}   adresse.postal   The postal code of the user
   * @apiSuccess {String}   adresse.country   The country of the user
   * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
   * @apiSuccess {Boolean}   role.staff   If the user is a staff
   *
   * @apiSuccessExample Success-Response:
   *     {
    "__v": 0,
    "createdAt": "2016-03-03T19:27:06.372Z",
    "name": "Tab",
    "lastName": "H",
    "email": "test@gmail.com",
    "userName": "Tabata",
    "password": "123456",
    "phoneNumber": 22456789,
    "_id": "56d8900a05bd2b841f89139f",
    "role": {
      "citizen": true,
      "staff": false
    },
    "adresse": {
      "street": "Route",
      "number": 38,
      "postal": 1258,
      "country": "Suisse"
    }
   }
   *
   *
   * @apiError Error404   The server has an unexpected error
   * @apiError NotFound  The user doesn't exist
   *
   */
// GET /api/users/:id
router.get('/:id', findUser, function(req, res, next) {
    res.send(req.user);
});


/**
 * @api {patch} /users/:id Update a User
 * @apiVersion 0.0.0
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiDescription This allow to update a specific user with its id
 *
 * @apiExample Example usage:
 * http://localhost/users/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the user
 * @apiSuccess {String}   name   The name of the user
 * @apiSuccess {String}   lastname   The lastname of the user
 * @apiSuccess {String}   email   The email of the user
 * @apiSuccess {String}   username   The username of the user
 * @apiSuccess {String}   password   The password of the user
 * @apiSuccess {Date}   createdAt The date of the creation of the user
 * @apiSuccess {Number}   phoneNumber   The phone number of the user
 * @apiSuccess {{}}   adresse   The adresse of the user
 * @apiSuccess {String}   adresse.street   The street of the user
 * @apiSuccess {Number}   adresse.number   The number street of the user
 * @apiSuccess {Number}   adresse.postal   The postal code of the user
 * @apiSuccess {String}   adresse.country   The country of the user
 * @apiSuccess {Boolean}   role.citizen   If the user is a citizen
 * @apiSuccess {Boolean}   role.staff   If the user is a staff
 *
 * @apiSuccessExample Success-Response:
 *     {
  "__v": 0,
  "createdAt": "2016-03-03T19:27:06.372Z",
  "name": "Tab",
  "lastName": "H",
  "email": "test@gmail.com",
  "userName": "Tabata",
  "password": "123456",
  "phoneNumber": 22456789,
  "_id": "56d8900a05bd2b841f89139f",
  "role": {
    "citizen": true,
    "staff": false
  },
  "adresse": {
    "street": "Route",
    "number": 38,
    "postal": 1258,
    "country": "Suisse"
  }
}
 *
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError ValidationError The parameter(s) doesn't have the correct type or is missing
 * @apiError NotFound  The user doesn't exist
 *
 */
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

/**
 * @api {delete} /users/:id Delete a User
 * @apiVersion 0.0.0
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiDescription This allow to delete a specific user with its id
 *
 * @apiExample Example usage:
 * http://localhost/users/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {204} 204
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError NotFound  The user doesn't exist
 *
 */
// DELETE /api/people/:id
router.delete('/:id', findUser, function(req, res, next) {
  User.remove({_id: req.user}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
