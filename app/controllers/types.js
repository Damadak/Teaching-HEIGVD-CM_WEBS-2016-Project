var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Type = mongoose.model('Type');

module.exports = function (app) {
  app.use('/api/types', router);
};

router.post('/', function (req, res, next) {
    var type = new Type(req.body); //on lui passe la requête JSOn

    type.save(function(err, createdType){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send(createdType);

    });
});

// GET /api/types
router.get('/', function (req, res, next) {
  Type.find(function(err, types) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(types);
  });

});

function findTag(req, res, next) {
  User.findById(req.params.id, function(err, tag) {
    if (err) {
      res.status(500).send(err);
      return;
    } else if (!tag) {
      res.status(404).send('Tag not found');
      return;
    }
    req.tag = tag;
    next();
  });
}

// GET /api/types/:id
router.get('/:id', findTag, function(req, res, next) {
  res.send(req.user);
});


// PUT /api/types/:id
router.put('/:id', function(req, res, next) {
  var typeId = req.params.id;

  Type.findById(typeId, function(err, type) {
    if (err){
      res.status(500).send(err);
      return;
    }

    type.id = req.body.id;
    type.description = req.body.description;
    type.author = req.body.author;
    type.name = req.body.name;
    type.date = req.body.date;

    type.save(req.body, function(err, updatedType){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedType);
    });

  });

});


// DELETE /api/types/:id
router.delete('/:id', function(req, res, next) {
  var typeId = req.params.id;

  Type.remove({_id: typeId}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
