/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

import morgan from 'morgan';

import configDB from './config/database';

import webpack from 'webpack';
import config from '../webpack.config.dev';
import open from 'open';

import router from './routes/router';

const port = 3000;
const app = express();
const compiler = webpack(config);

mongoose.connect(configDB.url);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//app.use(require('webpack-hot-middleware')(compiler));

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

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    //open(`http://localhost:${port}`);
  }
});
