import * as types from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function notificationReducer(state = initialState.notifications, action){
  switch(action.type){
    case types.SHOW_NOTIFICATION:
      return objectAssign(action.notify, {show: true});
    case types.HIDE_NOTIFICATION:
      return objectAssign({}, state, {show: false});
    case types.AJAX_CALL_ERROR:
      return objectAssign({}, {
        show: true,
        type: "danger",
        message: action.error
      });
    default:
      return state;
  }
}
