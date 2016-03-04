var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
User = mongoose.model('User'),
Issue=mongoose.model('Issue'),
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

router.get('/what', function (req, res, next){
  countIssues(function(err, issueCounts){

    var usersIds=[];
    for(var i=0;i <issueCounts.length; i++){
      usersIds.push(issueCounts[i]._id);
    }

    var criteria={
      _id:{$in:usersIds}
    };

    User.find(function(err, users){

      var responseBody=[];
      for(var i=0; i<issueCounts.length; i++){

        var result=getUser(issueCounts[i]._id, users).toJSON();
        result.numberOfIssues=issueCounts[i].total;

        responseBody.push(result);
      }
      res.send(responseBody);
      console.log("bon");
    });

  });
  /**

      // Extract the IDs of the publishers into an array.
    var mostIds = [];
    for (var i = 0; i < responseBody.length; i++) {
      responseBody.push(mostIds[i]._id);
    }
    res.send(mostIds);
**/
});



// GET /api/users/:id
router.get('/:id', findUser, function(req, res, next) {
  res.send(req.user);
});

//GET /api/users/id/issues
router.get('/:id/issues', findUser, function(req, res, next){
  Issue.find({"author":req.params.id},function(err, issues){
    res.send(issues);
  });

});




/**
 * @api {post} /users Create a user
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



 function getUser(id, users) {
  for (var i = 0; i < users.length; i++) {
    if (users[i]._id.toString() == id) {
      return users[i];
    }
  }

  return null;
}



function countIssues(callback){
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
    }
  });
}





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








//GET /api/users

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
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
