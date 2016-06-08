import * as types from './actionTypes';

export function setBookFilter(filterType){
  return { type: types.SET_BOOK_FILTER, filterType};
}
