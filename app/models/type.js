// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  TypeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: Schema.Types.ObjectId, // id staff
  date: Date
});

mongoose.model('Type', TypeSchema);
