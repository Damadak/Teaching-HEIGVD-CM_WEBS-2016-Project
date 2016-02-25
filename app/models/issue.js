// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  IssueSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true
  }, // citizen id
  date: Date,
  type:{
    type: String,
    required: true
  },
  tags:[
    Schema.Types.ObjectId
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
    }
  },
  status: String,
  actions: [
    {
      action:{
      type: String,
      author: Schema.Types.ObjectId,
      date: Date,
      status: String,
      content: String
    }
  }
  ],

  assignedTo: Schema.Types.ObjectId, // member staff id
  imgUrl: String
});


mongoose.model('Issue', IssueSchema);
