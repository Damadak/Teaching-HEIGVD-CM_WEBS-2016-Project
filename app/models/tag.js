// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  TagSchema = new Schema({
  id: Number,
  keyword: {
    type: String,
    required: true
  }
});

mongoose.model('Tag', TagSchema);
