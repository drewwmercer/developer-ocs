const path = require('path');
const router = require('express').Router();
const passport = require('passport');

//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in GitHub authentication will involve redirecting
//   the user to github.com.  After authorization, GitHub will redirect the user
//   back to this application at /auth/github/callback

router
  .route('/github')
  .get(passport.authenticate('github', { scope: ['user:email'] }));
  

//   If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.

router.route('/github/callback').get(passport.authenticate('github', {
  failureRedirect: '/'
}),
(req, res) => {
  res.redirect('/allProjects');
  //res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
