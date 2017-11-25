const db = require('../models');

// Defining methods for the projectsController
module.exports = {
  // Post a new project
  create: (req, res) => {
    console.log(JSON.stringify(req.body));
    db.Project
      .create(req.body)
      .then(dbNewPost => res.json(dbNewPost))
      .catch(err => res.status(422).json(err));
  },

  // Display all projects
  findAll: (req, res) => {
    db.Project
      .findAll({})
      .then(dbAllProjects => res.json(dbAllProjects))
      .catch(err => res.status(422).json(err));
  },

  // Display all posted projects
  findPosted: (req, res) => {
    db.Project
      .findAll({where: {
        UserId: req.params.id
      }})
      .then(dbPostedProjects => res.json(dbPostedProjects))
      .catch(err => res.status(422).json(err));
  },

  //  Edit a post
  editPostedProject: (req, res) => {
    db.Project
      .update(
        {
          project_title: req.body.title,
          project_details: req.body.details,
          primary_language: req.body.language
        },{
        where: {
          id: req.params.id
        }
      }).then(dbPostedProjects => res.json(dbPostedProjects))
      .catch(err => res.status(422).json(err));
  },

  // Delete a posted project
  removePostedProject: (req, res) => {
    db.Project
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbPostedProjects => res.json(dbPostedProjects))
      .catch(err => res.status(422).json(err));
  }
};
