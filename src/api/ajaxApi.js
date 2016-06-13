import nanoajax from 'nanoajax';

class AjaxApi {
  static getBooksData() {
    return new Promise((resolve, reject) => {
      nanoajax.ajax({url: "api/getBooks", method:"POST"}, (code, response)=>{
        if(code === 200){
          const respObj = JSON.parse(response);
          if(respObj.error){
              reject(respObj.error.message);
          }else{
            resolve(respObj);
          }
        }else{
          reject("Server error");
        }
      });
    });
  }

  static newBook(book) {
    let b = [];
    for(const param in book){
        b.push(param + "=" + book[param]);
    }
    return new Promise((resolve, reject)=>{
      nanoajax.ajax({url: "api/addBook", method:"POST", body: b.join("&")}, (code, response)=>{
        if(code === 200){
          if(response === "success"){
              resolve();
          }else{
            reject("Database error");
          }
        }else{
          reject("Server error");
        }
      });
    });
  }

  static updateBookStatus(id, type) {
    let qStr = "id=" + id + "&type=" + type;
    return new Promise((resolve, reject) => {
      nanoajax.ajax({url: "api/bookStatus", method:"POST", body: qStr}, (code, response)=>{
        if(code === 200){
          const respObj = JSON.parse(response);
          if(respObj.error){
              reject(respObj.error.message);
          }else{
            resolve(respObj);
          }
        }else{
          reject("Server error");
        }
      });
    });
  }

  static auth(user){
    let b = [];
    for(const param in user){
        b.push(param + "=" + user[param]);
    }
    return new Promise((resolve, reject)=>{
      nanoajax.ajax({url: "api/auth", method:"POST", body: b.join("&")}, (code, response)=>{
        if(code === 200){
          const respObj = JSON.parse(response);
          if(respObj.error){
              reject(respObj.error.message);
          }else{
            resolve(respObj);
          }
        }else{
          reject("Authentication failed");
        }
      });
    });
  }

  static updateAccount(user){
    let b = [];
    for(const param in user){
        b.push(param + "=" + user[param]);
    }
    return new Promise((resolve, reject) => {
     nanoajax.ajax({url: "api/updateAccount", method:"POST", body: b.join("&")}, (code, response)=>{
       if(code === 200){
         const respObj = JSON.parse(response);
         if(respObj.error){
             reject(respObj.error.message);
         }else{
           resolve(respObj);
         }
       }else{
         reject("Update failed");
       }
     });
    });
  }

  static resetPassword({id, password}){
    let qStr = "id=" + id + "&pwd=" + password;
    return new Promise((resolve, reject) => {
     nanoajax.ajax({url: "api/resetPassword", method:"POST", body: qStr}, (code, response)=>{
       if(code === 200 && response === "success"){
         resolve("Password updated");
       }else{
         reject({error:"Update failed"});
       }
     });
    });
  }

  static getAuthUser(){
    return new Promise((resolve, reject)=>{
      nanoajax.ajax({url: "api/getAuthUser", method:"POST"}, (code, response)=>{
        if(code === 200){
          const respObj = JSON.parse(response);
          if(respObj.error){
            reject(respObj.error);
            //resolve({error:"Authentication failed"})
          }else{
            resolve(respObj);
          }
        }else{
          reject({error:"Authentication failed"});
        }
      });
    });
  }
}

export default AjaxApi;
