var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// user Schema
var UserSchema = new Schema({
  id: String,
  token: String,
  name: String,
  email: [],
});


// return the model
module.exports = mongoose.model('user', UserSchema);
