import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import AuthPage from './components/auth/AuthPage';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import BooksPage from './components/books/BooksPage';
import AddBookPage from './components/books/AddBookPage';
import Dashboard from './components/auth/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="auth" component={AuthPage}/>
    <Route path="/books" component={BooksPage}/>
    <Route path="/add-book" component={AddBookPage}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Route>
);
