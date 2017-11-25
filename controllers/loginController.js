//const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../models');

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Use the GoogleStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and Google
  //   profile), and invoke a callback with a user object.
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          '707635115027-5m0fdcudcnq9rf7s2fc6eskdob2eeena.apps.googleusercontent.com',
        clientSecret: 'CPhVYV20QcVO1Gl3LF83qH-R',
        callbackURL: 'http://localhost:3001/auth/google/callback'
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        process.nextTick(function() {
          db.User
            .findOne({
              where: {
                google_id: profile.id
              }
            })
            .then(dbUserResults => {
              console.log(dbUserResults);
              if (dbUserResults) {
                return done(null, dbUserResults);
              } else {
                db.User
                  .create({
                    user_name: profile.displayName,
                    user_email: profile.emails[0].value,
                    google_id: profile.id
                  })
                  .then(result => {
                    return done(null, result);
                  })
                  .catch(err => {
                    return done(err);
                  });
              }
            })
            .catch(err => {
              return done(err);
            });
        });
      }
    )
  );
};

// Use the GoogleStrategy within Passport.

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       User.findOrCreate({ githubId: profile.id }, function(err, user) {
//         return done(err, user);
//       });
