// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  TypeSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: Number, // id staff
  date: Date 
});

mongoose.model('Type', TypeSchema);
