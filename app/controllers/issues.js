var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue');
  _=require("underscore");

module.exports = function (app) {
  app.use('/api/issues', router);
};

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
  User.findById(req.params.id, function(err, issue) {
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
  req.user.updatedAt = now;

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
