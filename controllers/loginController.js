const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../models');
const env = process.env.NODE_ENV || 'development';
let googleCallBackURL = 'http://localhost:3001/auth/google/callback';
let githubCallBackURL = 'http://localhost:3001/auth/github/callback';



module.exports = passport => {
  if (env === 'production') {
    googleCallBackURL = 'https://developer-ocs.herokuapp.com/auth/google/callback'
    githubCallBackURL = 'https://developer-ocs.herokuapp.com/auth/github/callback'
  }

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.User
      .findOne({
        where: {
          id: id
        }
      })
      .then(user => {
        done(null, user);
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
        callbackURL: googleCallBackURL
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        process.nextTick(() => {
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

  // Use the Github Strategy within Passport.

  passport.use(
    new GitHubStrategy(
      {
        clientID: '49b48c42021706f2c9cf',
        clientSecret: 'e54641680cd932ed79f9ff7cdac450f5caf78277',
        callbackURL: githubCallBackURL
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        process.nextTick(() => {
          db.User
            .findOne({
              where: {
                github_id: profile.id
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
                    github_id: profile.id
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
