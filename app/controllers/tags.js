var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Tag = mongoose.model('Tag');

module.exports = function (app) {
  app.use('/api/tags', router);
};

/**
 * @api {post} /tags Create a Tag
 * @apiVersion 0.0.0
 * @apiName CreateTag
 * @apiGroup Tag
 *
 * @apiDescription This allow to create an tag with the right parameters
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the tag
 * @apiSuccess {String}   keyword   The keyword of the tag
 * @apiSuccess {Date}   createdAt The date of the creation of the tag
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
 * @apiError ValidationError The keyword(s) doesn't have the correct type or is required
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.post('/', function (req, res, next) {
    var tag = new Tag(req.body); //on lui passe la requête JSOn
    var now = new Date();
    tag.updatedAt = now;

    tag.save(function(err, createdTag){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send(createdTag);

    });
});

/**
 * @api {get} /tags Get all the Tags
 * @apiVersion 0.0.0
 * @apiName GetTags
 * @apiGroup Tag
 *
 * @apiDescription This allow to get all the existed tags on the server
 *
 * @apiExample Example usage:
 * http://localhost/tags
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the tag
 * @apiSuccess {String} keyword   The keyword of the tag
 * @apiSuccess {Date}   createdAt The date of the creation of the tag
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
 * @apiError Error404   The server has an unexpected error
 *
 */

// GET api/tags
router.get('/', function (req, res, next) {
  Tag.find(function(err, tags) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(tags);
  });

});

/**
 * @api {function} /tags Verify the Tag exists
 * @apiVersion 0.0.0
 * @apiName VerifyTag
 * @apiGroup Tag
 *
 * @apiDescription This allow to test if the tag sended is on the server. This function is used in all the routes who need a tag verification
 *
 * @apiExample Example usage:
 * http://localhost/tags/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the tag
 * @apiSuccess {String} keyword   The keyword of the tag
 * @apiSuccess {Date}   createdAt The date of the creation of the tag
 *
 * @apiError Error404  The server has an unexpected error
 * @apiError NotFound  The tag not found
 *
 */
function findTag(req, res, next) {
  Tag.findById(req.params.id, function(err, tag) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!tag) {
      res.status(404).send('Tag not found');
      return;
    }
    req.tag = tag;
    console.log("test");
    next();
  });
}

/**
 * @api {get} /tags Find a specific Tag
 * @apiVersion 0.0.0
 * @apiName FindTag
 * @apiGroup Tag
 *
 * @apiDescription This allow to get a specific tag with its id
 *
 * @apiExample Example usage:
 * http://localhost/tags/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {Schema.Types.ObjectId}   _id   The id of the tag
 * @apiSuccess {String} keyword   The keyword of the tag
 * @apiSuccess {Date}   createdAt The date of the creation of the tag
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
 * @apiError Error404  The server has an unexpected error
 * @apiError NotFound  The tag doesn't exist
 *
 */
// GET /api/tags/:id
router.get('/:id', findTag, function(req, res, next) {
    res.send(req.tag);
});

/**
 * @api {patch} /tags/:id Update a Tag
 * @apiVersion 0.0.0
 * @apiName UpdateTag
 * @apiGroup Tag
 *
 * @apiDescription This allow to update a specific tag with its id
 *
 * @apiExample Example usage:
 * http://localhost/tags/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {ObjectId} _id id of the Tag
 * @apiSuccess {String} keyword  keyword of the Tag
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
 * @apiError Error404  The server has an unexpected error
 * @apiError NotFound  The tag doesn't exist
 * @apiError ValidationError  You have send wrong parameters or send a wrong type of data
 */
// PATCH /api/tags/:id
router.patch('/:id', findTag, function(req, res, next) {
    req.tag.keyword = req.body.keyword;
    var now = new Date();
    req.tag.updatedAt = now;

    req.tag.save(req.body, function(err, updatedTag){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedTag);
    });

});

/**
 * @api {delete} /tags/:id Delete a Tag
 * @apiVersion 0.0.0
 * @apiName DeleteTag
 * @apiGroup Tag
 *
 * @apiDescription This allow to delete a specific tag with its id
 *
 * @apiExample Example usage:
 * http://localhost/tags/56cece584a9f5ac80f820b68
 *
 * @apiSuccess {204} 204 id of the Tag
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
 * @apiError Error404  The server has an unexpected error
 * @apiError NotFound  The tag doesn't exist
 */
// DELETE /api/tags/:id
router.delete('/:id', findTag, function(req, res, next) {
  Tag.remove({_id: req.tag}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
