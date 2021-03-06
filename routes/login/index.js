const router = require('express').Router();
const githubRoutes = require('./github');
const googleRoutes = require('./google');

// Article routes
router.use('/', githubRoutes);
router.use('/', googleRoutes);

router.route('/loggedIn').get((req, res) => {
  if (!req.user) {
    res.json({ statusCode: 401 });
  } else {
    res.json(req.user);
  }
});

// Log out the user
router.route('/logout').get((req, res) => {
  req.session.destroy(err => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

module.exports = router;
