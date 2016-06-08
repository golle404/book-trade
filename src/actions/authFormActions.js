import * as types from './actionTypes';

export function authFormInputChange(name, value){
  return { type: types.AUTH_FORM_INPUT_CHANGE, name, value};
}

export function setAuthFormRole(reg){
  return { type: types.SET_AUTH_FORM_ROLE, reg};
}
