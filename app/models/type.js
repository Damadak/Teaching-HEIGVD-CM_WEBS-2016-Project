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
  date: String // ???
});

TypeSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Type', TypeSchema);
