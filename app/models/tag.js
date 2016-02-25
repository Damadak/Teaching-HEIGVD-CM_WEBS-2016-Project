// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  TagSchema = new Schema({
  keyword: {
    type: String,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('Tag', TagSchema);
