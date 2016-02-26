// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  IssueSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true
  }, // citizen id
  type:{
    type: Schema.Types.ObjectId,
    required: true
  },
  tags:[
    Schema.Types.ObjectId
  ],
  description:{
    type: String,
    required: true
  },
  location: {
    type: {
      type: String 
    },
    coordinates: [Number]
    },
  status: String,
  actions: [
    {
      type: { type: String },
      author: Schema.Types.ObjectId,
      date: Date,
      status: String,
      content: String
    }
  ],

  assignedTo: Schema.Types.ObjectId, // member staff id
  imgUrl: String,
  createdAt: Date,
  updatedAt: Date
});

IssueSchema.index({
  location: '2dsphere'
});

mongoose.model('Issue', IssueSchema);
