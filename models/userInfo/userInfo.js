const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, required: true },
  userName: { type: String, require: true }
});

const User = mongoose.model('User', userSchema);

module.exports = userInfo;
