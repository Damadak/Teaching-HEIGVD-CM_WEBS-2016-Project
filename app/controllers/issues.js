var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue');
  _=require("underscore");

module.exports = function (app) {
  app.use('/api/issues', router);
};
/*
"author": "",
"date": "",
"type":"",
"tags":[
  ""
],
"description":"",
"coordinates": {
  "x":"",
  "y":""
},
"status": "",
"actions": [
  {
    "type": "",
    "author": "",
    "date": "",
    "status": "",
    "content": ""
  }
],

"assignedTo": "",
"imgUrl": ""
*/

/**
 * @api {post} /users Create an issue
 * @apiName CreateIssue
 * @apiGroup Issue
 *
 * @apiSuccess {String} age Age of the person.
 */
router.post('/', function (req, res, next) {
    var issue = new Issue(req.body);
    var now = new Date();
    issue.createdAt = now;
    issue.status = "created";

    issue.save(function(err, createdIssue){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send(createdIssue);

    });
});

// GET /api/issues
router.get('/', function (req, res, next) {
  Issue.find(function(err, issues) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issues);
  });

});

function findIssue(req, res, next) {
  Issue.findById(req.params.id, function(err, issue) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!issue) {
      res.status(404).send('Issue not found');
      return;
    }
    req.issue = issue;
    next();
  });
}

// GET /api/issues/:id
router.get('/:id', findIssue, function(req, res, next) {
    res.send(req.issue);
  });

// PATCH /api/issues/:id
router.patch('/:id', findIssue, function(req, res, next) {
  var actions = _.clone(req.issue.actions);
  _.extend(req.issue, req.body);

  if(req.body.actions){
    req.issue.actions = _.extend(actions, req.body.issue);
  }
  var now = new Date();
  req.issue.updatedAt = now;

    req.issue.save(req.body, function(err, updatedIssue){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedIssue);
    });
});


// DELETE /api/issues/:id
router.delete('/:id', findIssue, function(req, res, next) {
  Issue.remove({_id: req.issue}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});

// POST /api/issues/:id/actions
router.post('/:id/actions', findIssue, function(req, res) {
  console.log(req.body);
  console.log(req.issue);

  req.issue.actions.push(req.body);

  req.issue.save(function(err, updatedIssue) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    
    res.send(updatedIssue.actions[updatedIssue.actions.length - 1]);
  });
});

// GET /api/issues/:id/actions
router.get('/:id/actions', findIssue, function(req, res) {
  res.send(req.issue.actions);
});

function findIssuesUser(req, res, next) {
  if(!req.body.user){
    res.status(400).send('User ID is required');
    return;
  }else if(!mongoose.Types.ObjectId.isValid(req.body.user)){
    res.status(400).send('No user with ID ' + req.body.user);
    return;
  }

  User.findById(req.body.user, function(err, user){
    if(err){
      res.status(500).send(err);
      return;
    }else if(!user){
      res.status(400).send }
  })
