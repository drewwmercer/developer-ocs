const db = require('../models');
const app = require('../server');

// Defining methods for the projectsController
module.exports = {
  // Save a project post
  saveProject: (req, res) => {
    db.Saved
      .create({
        ProjectId: req.body.project_id,
        user_id: req.body.user_id
      })
      .then(dbSavePost => res.json(dbSavePost))
      .catch(err => res.status(422).json(err));
  },

  // Display all saved/replied to projects
  findSaved: (req, res) => {
    db.Saved
      .findAll({
        include: [
          {
            model: db.Project
          }
        ],
        where: { user_id: req.params.id }
      })
      .then(dbSaved => res.json(dbSaved))
      .catch(err => res.status(422).json(err));
  },

  // Delete a saved project
  removeSavedProject: (req, res) => {
    let savedId = req.params.id;
    db.Saved
      .destroy({
        where: {
          id: savedId
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
