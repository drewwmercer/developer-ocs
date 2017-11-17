import React from 'react';

const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  })
);


class PostedProjects extends Component {
  render() {
    return (
      <form action="/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    );
  }
}

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/AllProjects',
    failureRedirect: '/login',
    failureFlash: true
  })
);


passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'passwd'
    },
    function(username, password, done) {
      // ...
    }
  )
);


export default LogIn;
