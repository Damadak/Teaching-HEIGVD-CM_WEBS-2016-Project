var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Type = mongoose.model('Type'),
  _=require("underscore");

module.exports = function (app) {
  app.use('/api/types', router);
};

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

// GET /api/types/:id
router.get('/:id', findType, function(req, res, next) {

    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(req.type);

});


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
