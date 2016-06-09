import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsNum, action){
  switch(action.type){
    case types.AJAX_CALL_BEGIN:
      return state + 1;
    case types.AJAX_CALL_END:
      return state - 1;
    case types.AJAX_CALL_ERROR:
      return state - 1;
    default:
      return state;
  }
}
