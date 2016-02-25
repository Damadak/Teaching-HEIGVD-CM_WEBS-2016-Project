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

function findType(req, res, next) {
  Type.findById(req.params.id, function(err, user) {
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

// GET /api/types/:id
router.get('/:id', findType, function(req, res, next) {
  
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(req.type);

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
