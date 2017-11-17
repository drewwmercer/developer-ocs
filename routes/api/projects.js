const router = require('express').Router();
const projectsController = require('../../controllers/projectsController');

// Create new project post and returns all project posts
router
  .route('/')
  .post(projectsController.create)
  .get(projectsController.findAll);

  // Pulls saved/replied to projects
router.route('/saved').get(projectsController.findSaved);

// Pulls all posted projects by user
// router
// .route('/:id')
// .get(projectsController.findPosted);

// Saves or removes the save on a project
// router
//   .route('/saved/:id')
//   .post(projectsController.saveProject)
//   .delete(projectsController.remove);

module.exports = router;
