var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue');
  _=require("underscore");

module.exports = function (app) {
  app.use('/api/issues', router);
};
/**
 * @api {post} /issues Create an Issue
 * @apiVersion 0.0.0
 * @apiName CreateIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to create an issue with the right parameters
 *
 * @apiExample Example usage:
 * Post in JSOn
 {
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
}
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
 *{
  "__v": 0,
  "status": "created",
  "createdAt": "2016-03-04T13:13:12.038Z",
  "author": "56cef06ac636642c090819e9",
  "type": "56d00c958b514ca41df60499",
  "description": "Test test",
  "imgUrl": "img/photo.jpg",
  "_id": "56d989e834b00920244c2bbb",
  "actions": [],
  "location": {
    "type": "Point",
    "coordinates": [
      46.78067,
      6.647367
    ]
  },
  "tags": [
    "56cece584a9f5ac80f820b68"
  ]
}
 *
 * @apiError UnexpectedToken The issue has some parameters with unexpected token
 * @apiError ValidationError There are missing parameters or uncorrect types
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
      <h2>400</h2>
      <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
    "description": {
      "properties": {
        "type": "required",
        "message": "Path `{PATH}` is required.",
        "path": "description"
      },
      "message": "Path `description` is required.",
      "name": "ValidatorError",
      "kind": "required",
      "path": "description"
    }
  }
}
 */
router.post('/', function (req, res, next) {
    var issue = new Issue(req.body);
    var now = new Date().toISOString().replace('T', ' ').substr(0, 19);
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


/**
 * @api {post} /issues/paginate
 * @apiVersion 0.0.0
 * @apiName PaginationIssues
 * @apiGroup Issue
 *
 * @apiDescription This allow to give an example of pagination
 *
 * @apiExample Example usage:
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
 *{
  "__v": 0,
  "status": "created",
  "createdAt": "2016-03-04T13:13:12.038Z",
  "author": "56cef06ac636642c090819e9",
  "type": "56d00c958b514ca41df60499",
  "description": "Test test",
  "imgUrl": "img/photo.jpg",
  "_id": "56d989e834b00920244c2bbb",
  "actions": [],
  "location": {
    "type": "Point",
    "coordinates": [
      46.78067,
      6.647367
    ]
  },
  "tags": [
    "56cece584a9f5ac80f820b68"
  ]
}
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
//GET /api/issues/paginate
router.get('/paginate', function (req, res, next) {
  var page = req.query.page ? parseInt(req.query.page, 10) :1,
      pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10): 30;

  var offset = (page - 1) * pageSize,
      limit = pageSize;
      Issue.count(function(err, totalCount){
        if (err){
          res.status(500).send(err);
          return;
        }
        res.set('X-Pagination-Page', page);
        res.set('X-Pagination-Page-Size', pageSize);
        res.set('X-Pagination-Total', totalCount);
        Issue.find(function(err, issue){
          if (err){
            res.status(500).send(err);
            return;
          }
          res.send(issue);
        });
      });
});


/**
 * @api {get} /issues?longitude=valuelatitude=value&distance=value Get the Issues near the georgraphic coordinates
 * @apiVersion 0.0.0
 * @apiName GetIssuesByCoordinates
 * @apiGroup Issue
 *
 * @apiDescription This allow to search the near Issues with geographic coordinates
 *
 * @apiExample Example usage:
 * http://localhost:3001/api/issues?longitude=46.778744&latitude=6.657598&distance=10000000
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
 *{
  "__v": 0,
  "status": "created",
  "createdAt": "2016-03-04T13:13:12.038Z",
  "author": "56cef06ac636642c090819e9",
  "type": "56d00c958b514ca41df60499",
  "description": "Test test",
  "imgUrl": "img/photo.jpg",
  "_id": "56d989e834b00920244c2bbb",
  "actions": [],
  "location": {
    "type": "Point",
    "coordinates": [
      46.78067,
      6.647367
    ]
  },
  "tags": [
    "56cece584a9f5ac80f820b68"
  ]
}
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
router.get('/', function(req, res, next) {
  var criteria = {};
  var latitude = req.query.latitude;
  longitude = req.query.longitude;
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

/**
 * @api {get} /issues Get all the Issues
 * @apiVersion 0.0.0
 * @apiName GetIssues
 * @apiGroup Issue
 *
 * @apiDescription This allow to get all the issues
 *
 * @apiExample Example usage:
 * http://localhost/api/issues
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError UnexpectedToken The issue has some parameters with unexpected token
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
      <h2>400</h2>
      <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
    "description": {
      "properties": {
        "type": "required",
        "message": "Path `{PATH}` is required.",
        "path": "description"
      },
      "message": "Path `description` is required.",
      "name": "ValidatorError",
      "kind": "required",
      "path": "description"
    }
  }
}
*
 */
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

/*
//GET /api/types/id/issues
router.get('/date', function(req, res, next){
  Issue.find({"createdAt":req.params.id},function(err, issues){
    res.send(issues);
  });
*/


/**
 * @api {get} /issues/solved Get all the solved Issues
 * @apiVersion 0.0.0
 * @apiName GetSolvedIssues
 * @apiGroup Issue
 *
 * @apiDescription This allow to get all the solved issues
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/solved
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
//GET /api/issues/solved
router.get('/solved', function(req,res,next){
Issue.find({"status":"solved"},function(err, issues){
        if (err){
        res.status(500).send(err);
        return;
      }
      res.send(issues);
    });
});



/**
 * @api {get} /issues/:id Find a specific Issues
 * @apiVersion 0.0.0
 * @apiName GetIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to get a specific Issue with its Id
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/56d989e834b00920244c2bbb
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError IssueNotFound Not found the Issue
 * @apiError Error404   The server has an unexpected error

 */
// GET /api/issues/:id
router.get('/:id', findIssue, function(req, res, next) {
    res.send(req.issue);
  });


  /**
   * @api {patch} /issues/:id Update a Issue
   * @apiVersion 0.0.0
   * @apiName UpdateIssue
   * @apiGroup Issue
   *
   * @apiDescription This allow to update a specific Issue with its Id
   *
   * @apiExample Example usage:
   * http://localhost/api/issues/56d989e834b00920244c2bbb
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
   *[{
      "__v": 0,
      "status": "created",
      "createdAt": "2016-03-04T13:13:12.038Z",
      "author": "56cef06ac636642c090819e9",
      "type": "56d00c958b514ca41df60499",
      "description": "Test test",
      "imgUrl": "img/photo.jpg",
      "_id": "56d989e834b00920244c2bbb",
      "actions": [],
      "location": {
        "type": "Point",
        "coordinates": [
          46.78067,
          6.647367
        ]
      },
      "tags": [
        "56cece584a9f5ac80f820b68"
      ]
    }]
   *
   *
   * @apiError IssueNotFound Not found the Issue
   * @apiError Error404   The server has an unexpected error
   *
   */
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


/**
 * @api {delete} /issues/:id Delete a Issue
 * @apiVersion 0.0.0
 * @apiName DeleteIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to delete a specific Issue with its Id
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/56d989e834b00920244c2bbb
 *
 * @apiError IssueNotFound Not found the Issue
 * @apiError Error404   The server has an unexpected error
 *
 */
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

/**
 * @api {post} /issues/:id/actions Create an Action on a Issue
 * @apiVersion 0.0.0
 * @apiName CreateActionIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to create an Action (Status Change or Comment) to an Issue
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/56d989e834b00920244c2bbb/actions
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError IssueNotFound Not found the Issue
 * @apiError UnexpectedToken The issue has some parameters with unexpected token
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 */
// POST /api/issues/:id/actions
router.post('/:id/actions', findIssue, function(req, res) {

 var issueChange=req.issue;
 var action = req.body.type;
 var status = req.body.status;

if(action=="Status change"){
  issueChange.status=status;
}

  req.issue.actions.push(req.body);
  req.issue.save(function(err, updatedIssue) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(updatedIssue.actions[updatedIssue.actions.length - 1]);
  });
});


/**
 * @api {get} /issues/:id/actions Get all the actions of an Issue
 * @apiVersion 0.0.0
 * @apiName GetActionIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to get all Actions (Status Change or Comment) of an Issue
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/56d989e834b00920244c2bbb/actions
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError IssueNotFound Not found the Issue
 * @apiError Error404   The server has an unexpected error
 *
 */
// GET /api/issues/:id/actions
router.get('/:id/actions', findIssue, function(req, res) {
  res.send(req.issue.actions);
});


/**
 * @api {post} /issues/getIssuesBetweenDatesWithStatus Get solved Issues in a period of two dates
 * @apiVersion 0.0.0
 * @apiName getIssuesBetweenDatesWIthStatus
 * @apiGroup Issue
 *
 * @apiDescription This allow to get all the solved Issues in a period of two dates. You can change solved by all other types of status
 *
 * @apiExample Example usage:
 * Post JSOn
 {
 "status":"solved",
 "startDate":"2015-12-12",
 "endDate":"2016-12-12"
 }
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
//POST /api/issues/periodSolved
router.post('/getIssuesBetweenDatesWithStatus', function (req,res,next){

  var startDate = new Date(req.body.startDate);
  var endDate = new Date(req.body.endDate);

  console.log(startDate);
  console.log(endDate);

  Issue.find({'status':status, "createdAt": {'$gte': startDate, '$lt': endDate}}, function(err, issues){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issues);
  });
});



//POST /api/issues/periodSolved
router.post('/getIssuesUnsolvedBetweenDates', function (req,res,next){

  var startDate = new Date(req.body.startDate);
  var endDate = new Date(req.body.endDate);

  console.log(status);
  console.log(startDate);
  console.log(endDate);

  Issue.find({'status':{$ne:"solved"}, "createdAt": {'$gte': startDate, '$lt': endDate}}, function(err, issues){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issues);
  });
});



/**
 * @api {post} /issues/getIssuesBetweenDates Get Issues in a period
 * @apiVersion 0.0.0
 * @apiName GetIssuesBetweenDates
 * @apiGroup Issue
 *
 * @apiDescription This allow to get all the Issues in a period of two dates
 *
 * @apiExample Example usage:
 * Post JSOn
 {
 "startDate":"2015-12-12",
 "endDate":"2016-12-12"
}
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
 *[{
    "__v": 0,
    "status": "created",
    "createdAt": "2016-03-04T13:13:12.038Z",
    "author": "56cef06ac636642c090819e9",
    "type": "56d00c958b514ca41df60499",
    "description": "Test test",
    "imgUrl": "img/photo.jpg",
    "_id": "56d989e834b00920244c2bbb",
    "actions": [],
    "location": {
      "type": "Point",
      "coordinates": [
        46.78067,
        6.647367
      ]
    },
    "tags": [
      "56cece584a9f5ac80f820b68"
    ]
  }]
 *
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
//POST /api/issues/period
router.post('/getIssuesBetweenDates', function (req,res,next){

  var startDate = new Date(req.body.startDate);
  var endDate = new Date(req.body.endDate);

  console.log(status);
  console.log(startDate);
  console.log(endDate);

  Issue.find({ "createdAt": {'$gte': startDate, '$lt': endDate}}, function(err, issues){
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issues);
  });
});


/**
 * @api {function} /issues Verify the Issue exists
 * @apiVersion 0.0.0
 * @apiName VerifyIssue
 * @apiGroup Issue
 *
 * @apiDescription This allow to test if the issue sended is on the server. This function is used in all the routes who need a issue verification
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
 * @apiError Error404  The server has an unexpected error
 * @apiError IssueNotFound  The Issue not found
 *
 */

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
