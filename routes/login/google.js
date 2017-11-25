const router = require('express').Router();
const loginController = require('../../controllers/loginController');

router.route('/google').post(loginController.create);
