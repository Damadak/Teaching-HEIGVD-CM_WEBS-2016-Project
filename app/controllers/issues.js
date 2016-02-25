var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Issue = mongoose.model('Issue');

module.exports = function (app) {
  app.use('/api/issues', router);
};

router.post('/', function (req, res, next) {
    var issue = new Issue(req.body); //on lui passe la requête JSOn

    issue.save(function(err, createdIssue){
      if (err) {
        res.status(500).send(err);
        return; // arrête la fonction s'il y a une erreur Content-Type: application/json dans le header de Postman
      }
      res.send(createdIssue);

    }); // on lui passe un callback
});


router.get('/', function (req, res, next) {
  Issue.find(function(err, issues) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issues);
  });

});

// GET /api/issues/:id
router.get('/:id', function(req, res, next) {
  var issueId = req.params.id;
  Issue.findById(issueId, function(err, issue) {
    if (err){
      res.status(500).send(err);
      return;
    }
    res.send(issue);
  });

});

/*
// PUT /api/issues/:id
router.put('/:id', function(req, res, next) {
  var issueId = req.params.id; 

  Issue.findById(issueId, function(err, issue) {
    if (err){
      res.status(500).send(err);
      return;
    }

    issue.name = req.body.name;
    issue.age = req.body.age;

    issue.save(req.body, function(err, updatedIssue){
      if (err){
        res.status(500).send(err);
        return;
      }
      res.send(updatedIssue);
    });

  });

});
*/

// DELETE /api/issues/:id
router.delete('/:id', function(req, res, next) {
  var issueId = req.params.id;

  Issue.remove({_id: issueId}, function(err, data) {
    if (err){
      res.status(500).send(err);
      return;
    }
    console.log('Deleted' + data + 'documents');
    res.send(204);
  });

});
