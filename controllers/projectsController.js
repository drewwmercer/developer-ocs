// const db = require('../models');

// Defining methods for the projectsController
module.exports = {
  
  // Post a new project
  create: (req, res) => {
    console.log(JSON.stringify(req.body));
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Display all projects
  findAll: (req, res) => {
    // db.Project
    //   .find()
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },

  // Display all saved/replied to projects
  findSaved: (req, res) => {

    // db.Project
    //   .findById({ userId })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },

  // Display all posted projects
  findPosted: (req, res) => {
    db.Project
      .findById({ userId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

    // Saved a project post
  saveProject: (req, res) => {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Delete a saved project
  removeSavedProject: (req, res) => {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
