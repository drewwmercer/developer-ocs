const router = require('express').Router();
const loginController = require('../../controllers/loginController');

router.route('/github').post(loginController.create);
