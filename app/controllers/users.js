var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

  module.exports = function (app) {
  app.use('/api/user', router);
};


/**
 * @api {post} /user Create a user
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiSuccess {String} age Age of the person.
 */
router.post('/', function (req, res, next) {

  var user = new User(req.body);

  user.save(function (err, createdUser) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(createdUser);
  });
});

