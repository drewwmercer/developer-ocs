const router = require('express').Router();
const projectsController = require('../../controllers/projectsController');
const savedProjectController = require('../../controllers/savedProjectController');


// Create new project post and returns all project posts
router
  .route('/')
  .post(projectsController.create)
  .get(projectsController.findAll);

  // Creates a saved/replied to projects
router.route('/saved')
.post(savedProjectController.saveProject);

// Pulls all posted projects by user
router
  .route('/:id')
  .get(projectsController.findPosted)
  .delete(projectsController.removePostedProject);

// Removes and views saved projects
router
  .route('/saved/:id')
  .get(savedProjectController.findSaved)
  .delete(savedProjectController.removeSavedProject);

module.exports = router;
