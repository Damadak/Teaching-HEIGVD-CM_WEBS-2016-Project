var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Tag = mongoose.model('Tag');

module.exports = function (app) {
  app.use('/api/tags', router);
};

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
 * @api {get} /tags Request Tags Informations
 * @apiName GetTags
 * @apiGroup Tags
 *
 * @apiSuccess {ObjectId} _id Id of the Tag.
 * @apiSuccess {String} keyword  keyword of the Tag.
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

// GET /api/tags/:id
router.get('/:id', findTag, function(req, res, next) {
    res.send(req.tag);
});

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
