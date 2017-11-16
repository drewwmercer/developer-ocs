const db = require('../models');

// Defining methods for the projectsController
module.exports = {
  
  // Save a project
  create: (req, res) => {
    console.log(JSON.stringify(req.body));
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Display all projects
  findAll: (req, res) => {
    db.Project
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

    // Display all favorited/replied to projects
  findSaved: (req, res) => {
    db.Project
      .findById({ userId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

    // Display all posted projects
  findPosted: (req, res) => {
    db.Project
      .findById({ userId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Delete a saved project
  remove: (req, res) => {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
