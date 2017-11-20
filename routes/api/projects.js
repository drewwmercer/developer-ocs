const router = require('express').Router();
const projectsController = require('../../controllers/projectsController');
const savedProjectController = require('../../controllers/savedProjectController');


// Create new project post and returns all project posts
router
  .route('/')
  .post(projectsController.create)
  .get(projectsController.findAll);

  // Pulls and views saved/replied to projects
router.route('/saved')
.post(savedProjectController.saveProject);

// Pulls all posted projects by user
router
  .route('/:id')
  .get(projectsController.findPosted)
  .delete(projectsController.removePostedProject);

// Removes the save on a project
router
  .route('/saved/:id')
  .get(savedProjectController.findSaved)
  .delete(savedProjectController.removeSavedProject);

module.exports = router;
