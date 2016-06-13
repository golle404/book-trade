import * as types from './actionTypes';
import AjaxApi from '../api/ajaxApi';

export function userLoginSuccess(user){
  return { type: types.USER_LOGIN_SUCCESS, user};
}

export function booksDataLoadedSuccess(booksData){
  return { type: types.BOOKS_DATA_LOADED_SUCCESS, booksData};
}

export function bookStatusUpdatedSuccess(book){
  return { type: types.BOOK_STATUS_UPDATED_SUCCESS, book};
}

export function newBookSuccess(book){
  return { type: types.NEW_BOOK_SUCCESS, book};
}

export function updateAccountSuccess(user){
  return { type: types.UPDATE_ACCOUNT_SUCCESS, user};
}

export function resetPasswordSuccess(user){
  return { type: types.RESET_PASSWORD_SUCCESS, user};
}

export function ajaxCallBegin(){
  return {type: types.AJAX_CALL_BEGIN};
}

export function ajaxCallEnd(){
  return {type: types.AJAX_CALL_END};
}

export function ajaxCallError(error){
  return {type: types.AJAX_CALL_ERROR, error};
}

export function getBooksData(){
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return AjaxApi.getBooksData().then((response) => {
      dispatch(ajaxCallEnd());
      dispatch(booksDataLoadedSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function updateBookStatus(bookId, updateType){
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return AjaxApi.updateBookStatus(bookId, updateType).then((response) => {
      dispatch(ajaxCallEnd());
      dispatch(bookStatusUpdatedSuccess(response));
    }).catch((error)=>{
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function getAuthUser(flag){
  return function(dispatch){
    //dispatch(ajaxCallBegin());
    return AjaxApi.getAuthUser(flag).then((response) => {
      //dispatch(ajaxCallEnd());
      dispatch(userLoginSuccess(response));
    }).catch(error => {
      //dispatch(ajaxCallError(error));
      //throw(error);
    });
  };
}

export function formSubmit(formData){
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return AjaxApi.auth(formData).then((response) => {
      dispatch(ajaxCallEnd());
      dispatch(userLoginSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function newBookSubmit(formData){
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return AjaxApi.newBook(formData).then((response) => {
      dispatch(ajaxCallEnd());
      dispatch(newBookSuccess());
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function accountSettingsSubmit(formData){
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return AjaxApi.updateAccount(formData).then((response) => {
      dispatch(ajaxCallEnd());
      dispatch(updateAccountSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function resetPasswordSubmit(formData){
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return AjaxApi.resetPassword(formData).then((response) => {
      dispatch(ajaxCallEnd());
      dispatch(resetPasswordSuccess(response));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
