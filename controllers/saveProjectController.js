const db = require('../models');
const app = require('../server');

// Defining methods for the projectsController
module.exports = {

    // Save a project post
    saveProject: (req, res) => {
      db.Project
        .create({
          _id: req.params.id
        })
        .then(dbSavePost => res.json(dbSavePost))
        .catch(err => res.status(422).json(err));
    },

    // Delete a saved project
    removeSavedProject: (req, res) => {
      db.Project
        .findById({
          _id: req.params.id
        })
        .then(dbSavedPosts => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
