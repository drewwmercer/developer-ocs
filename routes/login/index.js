const router = require('express').Router();
const loginRoutes = require('./login');

// Article routes
router.use('/', loginRoutes);

module.exports = router;
