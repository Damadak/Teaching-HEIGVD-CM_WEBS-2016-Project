var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Tag = mongoose.model('Tag');

module.exports = function (app) {
  app.use('/api/tags', router);
};

router.post('/', function (req, res, next) {
    var tag = new Tag(req.body); //on lui passe la requête JSOn

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
router.get('/', function (req, res, next) {
  Tag.find(function(err, tags) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(tags);
  });

});

// GET /api/tags/:id
router.get('/:id', function(req, res, next) {
  var tagId = req.params.id;
  Tag.findById(tagId, function(err, tags) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(tag);
  });

});


// PUT /api/tags/:id
router.put('/:id', function(req, res, next) {
  var tagId = req.params.id;

  Tag.findById(tagId, function(err, tag) {
    if (err){
      res.status(500).send(err);
      return;
    }

    tag.id = req.body.id;
    tag.keyword = req.body.keyword;

    tag.save(req.body, function(err, updatedTag){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedTag);
    });

  });

});


// DELETE /api/tags/:id
router.delete('/:id', function(req, res, next) {
  var tagId = req.params.id;

  Tag.remove({_id: tagId}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
