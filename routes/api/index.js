const router = require('express').Router();
const projectRoutes = require('./projects');

// Article routes
router.use('/projects', projectRoutes);

module.exports = router;
