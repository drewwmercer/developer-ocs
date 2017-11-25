const path = require('path');
const router = require('express').Router();
const passport = require('passport');

router
  .route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }));

router.route('/google/callback').get(passport.authenticate('google', {
  failureRedirect: '/'
}),
(req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
