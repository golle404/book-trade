import * as types from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function authFormReducer(state = initialState.authForm, action){
  let newState;

  switch(action.type){
    case types.SET_AUTH_FORM_ROLE:
      newState = objectAssign({}, state, {register: action.reg});
      return newState;
    case types.AUTH_FORM_INPUT_CHANGE:
      newState = objectAssign({}, state);
      newState[action.name] = action.value;
      return newState;
    default:
      return state;
  }
}
