const Sequelize = require('sequelize');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectId: { type: String, required: true },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = posted;
