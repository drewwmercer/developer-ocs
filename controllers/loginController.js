const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../models');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://www.example.com/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        User.findOne({ 'google.id': profile.id }, function(err, user) {
          if (err) return done(err);
          if (user) return done(null, user);
          else {
            var newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = accessToken;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value;

            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
            console.log(profile);
          }
        });
      });
    }
  )
);
