const router = require('express').Router();
const loginController = require('../../controllers/loginController');

router.route('/github').get(loginController.create);

module.exports = router;
