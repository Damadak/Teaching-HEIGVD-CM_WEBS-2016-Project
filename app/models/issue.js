// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  IssueSchema = new Schema({
  id: Number,
  author: Number, // citizen id
  date: String, // ???
  type: String,
  tags:{}, // à vérifier
  description: String,
  coordinates: {
    x: Number,
    y: Number
  },
  status: String,
  actions: {
    action:{
      type: String,
      author: String,
      date: String, // ???
      status: String,
      content: String
    }
  },
  assignedTo: Number, // member staff id
  imgUrl: String
});


mongoose.model('Issue', IssueSchema);
