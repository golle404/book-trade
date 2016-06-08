/*import * as types from './actionTypes';
import loginApi from '../api/loginApi';

export function userLoginSuccess(user){
  return { type: types.USER_LOGIN_SUCCESS, user};
}

export function getAuthUser(flag){
  return function(dispatch){
    return loginApi.getAuthUser(flag).then((response) => {
      dispatch(userLoginSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}*/
