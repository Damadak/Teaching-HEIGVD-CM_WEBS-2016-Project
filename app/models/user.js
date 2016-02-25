// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var  UserSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: Date,
  updatedAt: Date,
  phoneNumber: {
    type: Number,
    required: true
  },
  adresse: {
    street: String,
    number: Number,
    postal: Number,
    country: String
  },
  role: {
    citizen: Boolean,
    staff: Boolean
  }
});


mongoose.model('User', UserSchema);
