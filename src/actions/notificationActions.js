import * as types from './actionTypes';

export function showNotification(notify){
  return { type: types.SHOW_NOTIFICATION, notify};
}

export function hideNotification(){
  return { type: types.HIDE_NOTIFICATION};
}
