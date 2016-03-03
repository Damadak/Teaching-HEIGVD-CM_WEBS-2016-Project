var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Type = mongoose.model('Type'),
  _=require("underscore");

module.exports = function (app) {
  app.use('/api/types', router);
};


/**
 * @api {post} /types Create a Type
 * @apiVersion 0.0.0
 * @apiName CreateType
 * @apiGroup Type
 *
 * @apiDescription This allow to create a type with the right parameters
 *
 *
 * @apiSuccess {Schema.Types.ObjectId}   author   The id of the author of the type
 * @apiSuccess {String}   name   The name of the type
 * @apiSuccess {String}   description   The description of the type
 * @apiSuccess {Date}   createdAt The date of the creation of the type
 *
 * @apiSuccessExample Success-Response:
 *
     {
    "__v": 0,
    "createdAt": "2016-03-03T19:09:04.598Z",
    "name": "Route 2",
    "description": "Tous les problèmes liés à la route",
    "author": "56cef06ac636642c090819e9",
    "_id": "56d88bd0ed816d3014765b17"
    }
 *
 *
 * @apiError UnexpectedToken The type has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
      <h2>400</h2>
      <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {
  "message": "Type validation failed",
  "name": "ValidationError",
  "errors": {
    "author": {
      "properties": {
        "type": "required",
        "message": "Path `{PATH}` is required.",
        "path": "author"
      },
      "message": "Path `author` is required.",
      "name": "ValidatorError",
      "kind": "required",
      "path": "author"
    }
  }
}
 */
router.post('/', function (req, res, next) {
    var type = new Type(req.body); //on lui passe la requête JSOn
    var now = new Date();
    type.createdAt = now;

    type.save(function (err, createdType){
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send(createdType);

    });
});

/**
 * @api {get} /types Get all the Types
 * @apiVersion 0.0.0
 * @apiName GetTypes
 * @apiGroup Type
 *
 * @apiDescription This allow to get all the Types found on the server
 *
 * @apiSuccess {Schema.Types.ObjectId}   author   The id of the author of the type
 * @apiSuccess {String}   name   The name of the type
 * @apiSuccess {String}   description   The description of the type
 * @apiSuccess {Date}   createdAt The date of the creation of the type
 *
 * @apiSuccessExample Success-Response:
 *     [
         {
        "__v": 0,
        "createdAt": "2016-03-03T19:09:04.598Z",
        "name": "Route 2",
        "description": "Tous les problèmes liés à la route",
        "author": "56cef06ac636642c090819e9",
        "_id": "56d88bd0ed816d3014765b17"
        }
      ]
 *
 *
 * @apiError Error404   The server has an unexpected error
 *
 */
// GET /api/types
router.get('/', function (req, res, next) {
  var query = Type.find()
  .sort('name');

  if (req.query.embed == 'author') {
    query = query.populate('author');
  }

  query.exec(function(err, types) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(types);
  });

});

/**
 * @api {get} /types Verify the Type exists
 * @apiVersion 0.0.0
 * @apiName VerifyType
 * @apiGroup Type
 *
 * @apiDescription This allow to test if the type sended is on the server. This function is used in all the routes who need a type verification
 *
 * @apiSuccess {Schema.Types.ObjectId}   author   The id of the author of the type
 * @apiSuccess {String}   name   The name of the type
 * @apiSuccess {String}   description   The description of the type
 * @apiSuccess {Date}   createdAt The date of the creation of the type
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError NotFound   Type not found
 *
 */
function findType(req, res, next) {
  Type.findById(req.params.id, function(err, type) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!type) {
      res.status(404).send('Type not found');
      return;
    }
    req.type = type;
    next();
  });
}

/**
 * @api {get} /types Find a Type
 * @apiVersion 0.0.0
 * @apiName GetType
 * @apiGroup Type
 *
 * @apiDescription This allow to find a Type with its id
*
 * @apiExample Example usage:
 * http://localhost/types/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {Schema.Types.ObjectId}   author   The id of the author of the type
 * @apiSuccess {String}   name   The name of the type
 * @apiSuccess {String}   description   The description of the type
 * @apiSuccess {Date}   createdAt The date of the creation of the type
 *
 * @apiSuccessExample Success-Response:
 *     {
    "__v": 0,
    "createdAt": "2016-03-03T19:09:04.598Z",
    "name": "Route 2",
    "description": "Tous les problèmes liés à la route",
    "author": "56cef06ac636642c090819e9",
    "_id": "56d88bd0ed816d3014765b17"
  }
 *
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError NotFound   Type not found
 *
 */
// GET /api/types/:id
router.get('/:id', findType, function(req, res, next) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(req.type);
});


/**
 * @api {patch} /types Update a Type
 * @apiVersion 0.0.0
 * @apiName UpdateType
 * @apiGroup Type
 *
 * @apiDescription This allow to find a Type with its id
*
 * @apiExample Example usage:
 * http://localhost/types/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {Schema.Types.ObjectId}   author   The id of the author of the Type
 * @apiSuccess {String}   name   The name of the type
 * @apiSuccess {String}   description   The description of the Type
 * @apiSuccess {Date}   createdAt The date of the creation of the type
 *
 * @apiSuccessExample Success-Response:
 *     {
      "__v": 0,
      "createdAt": "2016-03-03T19:09:04.598Z",
      "name": "Route 3",
      "description": "Tous les problèmes liés à la route",
      "author": "56cef06ac636642c090819e9",
      "_id": "56d88bd0ed816d3014765b17"
    }
 *
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError ValidationError The type has some parameters with uncorrect type or missing required parameters
 * @apiError NotFound   Type not found
 *
 */
// PATCH /api/types/:id
router.patch('/:id',findType, function(req, res, next) {
  _.extend(req.type, req.body);
    var now = new Date();
    req.type.updatedAt = now;
    console.log("yeahhhh");

    req.type.save(function(err, updatedType){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedType);
    });

});


/**
 * @api {delete} /types Delete a specific Type
 * @apiVersion 0.0.0
 * @apiName DeleteType
 * @apiGroup Type
 *
 * @apiDescription This allow to delete a Type with its id
*
 * @apiExample Example usage:
 * http://localhost/types/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {204} 204
 *
 * @apiError Error404   The server has an unexpected error
 * @apiError NotFound   Type not found
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
// DELETE /api/types/:id
router.delete('/:id', findType, function(req, res, next) {
  Type.remove({_id: req.type}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
