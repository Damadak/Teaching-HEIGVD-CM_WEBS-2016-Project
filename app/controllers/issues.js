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
 * @api {post} /issues Create an Issue
 * @apiVersion 0.0.0
 * @apiName CreateIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to create an issue with the right parameters
 *
 * @apiExample Example usage:
 * http://localhost/users
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
 *
 * @apiError ValidationError One or more of the data have not the correct type or are required
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
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

// http://localhost:3001/api/issues?longitude=46.778744&latitude=6.657598&distance=10000000
router.get('/', function(req, res, next) {
  var criteria = {};
  var latitude = req.query.latitude,
  longitude = req.query.longitude,
  distance = req.query.distance;
  if (latitude && longitude && distance) {
    criteria.location = {
      $near: {
        $geometry: {
        type: 'Point',
        coordinates: [
          parseFloat(longitude),
          parseFloat(latitude)
        ]
      },
      $maxDistance: parseInt(distance, 10)
      }
    };
  }

  console.log(req.query.latitude);
  console.log(req.query.longitude);
  console.log(req.query.distance);

  Issue.find(criteria, function(err, issues) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log(issues);
    res.send(issues);
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
