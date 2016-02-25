// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  IssueSchema = new Schema({
  id: Number,
  author: {
    type: Number,
    required: true
  }, // citizen id
  date: String, // ???
  type:{
    type: String,
    required: true
  },
  tags:{}, // à vérifier
  description:{
    type: String,
    required: true
  },
  coordinates: {
    x:{
      type: Number,
      required: true
    },
    y:{
      type: Number,
      required: true
    },
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
