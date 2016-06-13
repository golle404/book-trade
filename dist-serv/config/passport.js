import {Strategy} as LocalStrategy from 'passport-local';
import User from './../models/user';

export default function(passport){

  passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCalback: true
    },
    function(req, username, password, done){
      process.nextTick(function(){
        User.findOne({'username': username}, function(err, user){
          if(err){
            return done(err);
          };
          if(user){
            return done("Username taken")
          }else{
            let newUser = new User();
            newUser.username = username;
            newUser.password = newUser.generateHash(password);

            newUser.save(function(err){
              if(err){
                throw(err)
              }else{
                return done(null, newUser);
              }
            });
          }
        })
      })
    }
  ))
}
