const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// create local Strategy
const localOptions = {   usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // verify this username and password
  User.findOne({email: email}, function(err, user) {
    if(err) return done(err, false);
    if(!user) { return done(null, false);}

    // is password correct?
    
  });
});


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // see if the userid in the payload exists in db.
  // if it does call done with that user,
  // other call done w/o a user.
  User.findById(payload.sub, function(err, user) {
    if(err) return done(err, false);

    if (user) {
      done(null, user);
    }
    else {
      done(null, false);
    }
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);
