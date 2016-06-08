import * as types from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action){
  let newState;

  switch(action.type){
    case types.USER_LOGIN_SUCCESS:
    case types.UPDATE_ACCOUNT_SUCCESS:
      newState = objectAssign({}, state, action.user);
      return newState;
    default:
      return state;
  }
}
