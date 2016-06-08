import { combineReducers } from 'redux';
import user from './userReducer';
import books from './booksReducer';
import ajaxCalls from './ajaxStatusReducer';
import notifications from './notificationReducer';

export default combineReducers({
  user,
  books,
  ajaxCalls,
  notifications});
