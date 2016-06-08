import objectAssign from 'object-assign';

const delay = 1000;
const books = [
  {
    id: 0,
    title: "Unrequested Unapproved",
    author: "golle",
    ownerId: 6,
    requested: -1,
    approved: false
  },
  {
    id: 1,
    title: "Requested Unapproved",
    author: "golle",
    ownerId: 6,
    requested: 1,
    approved: false
  },
  {
    id: 2,
    title: "Requested Approved",
    author: "golle",
    ownerId: 6,
    requested: 1,
    approved: true
  },
  {
    id: 3,
    title: "Unrequested Unapproved",
    author: "lleggo",
    ownerId: 1,
    requested: -1,
    approved: false
  },
  {
    id: 4,
    title: "Requested Approved",
    author: "lleggo",
    ownerId: 1,
    requested: 2,
    approved: true
  },
  {
    id: 5,
    title: "User Requested Unapproved",
    author: "lleggo",
    ownerId: 1,
    requested: 6,
    approved: false
  },
  {
    id: 6,
    title: "User Requested Approved",
    author: "lleggo",
    ownerId: 1,
    requested: 6,
    approved: true
  }
];

class AjaxApi {
  static getBooksData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(books){
            resolve(objectAssign([], books));
        }else{
          reject("no books");
        }
      }, delay);
    });
  }

  static newBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newBook = objectAssign({}, book, {id: books.length + 1, requested: -1, approved: false});
        books.push(newBook);
        if(books){
            resolve(newBook);
        }else{
          reject("error adding book");
        }
      }, delay);
    });
  }

  static updateBookStatus(id, type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let book = objectAssign({},books.filter(b=>{return b.id === id;})[0]);
        if(book){
          switch (type) {
            case "approve":
              book.approved = true;
              break;
            case "request":
              book.requested = 6;
              break;
            case "cancel":
              book.requested = -1;
              break;
            default:
              break;
          }
          resolve(book);
        }else{
          reject('Book ID does not exist');
        }
      }, delay);
    });
  }
  static login(user){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user.username === "golle"){
          resolve({id: 6, username: "golle", auth: true});
        }else{
          reject('Wrong username');
        }
      }, delay);
    });
  }

  static updateAccount(user){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user){
          resolve(objectAssign({id: 6, username: "golle", auth: true}, user));
        }else{
          reject('Not Auth');
        }
      }, delay);
    });
  }

  static getAuthUser(auth){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(auth){
          resolve({id: 6, username: "golle", auth: true});
        }else{
          reject('Not Auth');
        }
      }, delay);
    });
  }
}

export default AjaxApi;
