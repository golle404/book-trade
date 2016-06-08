import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import AuthPage from './components/auth/AuthPage';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import UserPage from './components/user/UserPage';
import AddBookPage from './components/user/AddBookPage';
import AccountSettingsPage from './components/user/AccountSettingsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="auth" component={AuthPage}/>
    <Route path="user/:username" component={UserPage}/>
    <Route path="user/:username/add-book" component={AddBookPage}/>
    <Route path="user/:username/settings" component={AccountSettingsPage}/>
  </Route>
);
