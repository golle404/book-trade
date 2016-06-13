import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import AuthPage from './components/auth/AuthPage';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import BooksPage from './components/books/BooksPage';
import AddBookPage from './components/books/AddBookPage';
import Dashboard from './components/auth/Dashboard';

function requireAuth(store, nextState, replace, next){
  if(!store.getState().user.auth){
    replace('/auth');
  }
  next();
}

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/auth" component={AuthPage}/>
      <Route path="/books" component={BooksPage} onEnter={requireAuth.bind(this, store)}/>
      <Route path="/add-book" component={AddBookPage} onEnter={requireAuth.bind(this, store)}/>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth.bind(this, store)}/>
    </Route>
  )
}
