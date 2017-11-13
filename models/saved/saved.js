const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  projectId: {type: String, required: true },
  userId: { type: String, required: true }
});

const Saved = mongoose.model('Saved', savedSchema);

module.exports = saved;
