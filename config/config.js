var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tmp'
    },
    port: 3001,
    db: 'mongodb://localhost/tmp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tmp'
    },
    port: 3000,
    db: 'mongodb://localhost/tmp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tmp'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/tmp-production'
  }
};

module.exports = config[env];
