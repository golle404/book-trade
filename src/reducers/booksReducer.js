import * as types from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function booksReducer(state = initialState.bookData, action){
  let newState;
  switch(action.type){
    case types.BOOKS_DATA_LOADED_SUCCESS:
      newState = objectAssign({}, state, {books: action.booksData});
      return newState;
    case types.BOOK_STATUS_UPDATED_SUCCESS:
      newState = objectAssign({}, state);
      newState.books = [
        ...newState.books.filter(book => book._id !== action.book._id),
        action.book
      ];

      return newState;
    case types.NEW_BOOK_SUCCESS:
      /*newState = objectAssign({}, state);
      newState.books = [ ...newState.books, action.book ];*/
      return state;
    case types.SET_BOOK_FILTER:
      newState = objectAssign({}, state, {filterType: action.filterType});
      return newState;
    default:
      return state;
  }
}
