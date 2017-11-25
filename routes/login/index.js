const router = require('express').Router();
const loginRoutes = require('./google', './github');

// Article routes
router.use('/', loginRoutes);

module.exports = router;
