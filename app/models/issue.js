// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  IssueSchema = new Schema({
  id: Number,
  author: {
    type: Number,
    required: true
  }, // citizen id
  date: Date,
  type:{
    type: String,
    required: true
  },
  tags:[
    Number
  ],
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
  actions: [
    action:{
      type: String,
      author: String,
      date: Date,
      status: String,
      content: String
    }
  ],
  assignedTo: Number, // member staff id
  imgUrl: String
});


mongoose.model('Issue', IssueSchema);
