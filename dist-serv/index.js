/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

import favicon from 'serve-favicon';

import morgan from 'morgan';

import configDB from './config/database';

import router from './routes/router';

const port = 3000;
const app = express();

mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// required for passport
app.use(session({ secret: 'freecodecampbooktrade', saveUninitialized: true, resave: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use("/", router);
import Account from './models/Account';

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//app.use(favicon(path.join(__dirname, './favicon.ico')));
// static routes
app.use(express.static(path.join(__dirname, './')));

/*app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './index.html'));
});*/

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running at port " + port);
  }
});
