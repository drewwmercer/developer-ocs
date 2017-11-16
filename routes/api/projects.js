const router = require('express').Router();
const projectsController = require('../../controllers/projectsController');

router
  .route('/')
  .post(projectsController.create)
  .get(projectsController.findAll)
  .get(projectsController.findPosted)
  .get(projectsController.findSaved);

router.route('/:id').delete(projectsController.remove);

module.exports = router;
