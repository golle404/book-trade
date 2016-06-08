import * as filterTypes from './bookFilterTypes';

export const filterButtons = [
  {name: filterTypes.FILTER_ALL, caption: "All Books", btnClass: "btn btn-primary"},
  {name: filterTypes.FILTER_USER, caption: "Your Books", btnClass: "btn btn-info"},
  {name: filterTypes.FILTER_REQUESTED, caption: "Your Requests", btnClass: "btn btn-warning"},
  {name: filterTypes.FILTER_PENDING, caption: "Pending Requests", btnClass: "btn btn-success"},
  {name: filterTypes.FILTER_APPROVED, caption: "Approved Requests", btnClass: "btn btn-danger"}
];

export function filterBooks(books, fType) {
  switch (fType) {
    case filterTypes.FILTER_ALL:
      return books;
    case filterTypes.FILTER_USER:
      return books.filter(book=>{
        return book.status.isOwn;
      });
    case filterTypes.FILTER_REQUESTED:
      return books.filter(book=>{
        return book.status.userRequested;
      });
    case filterTypes.FILTER_APPROVED:
      return books.filter(book=>{
        return book.status.isOwn && book.approved && book.requested !== -1;
      });
    case filterTypes.FILTER_PENDING:
      return books.filter(book=>{
        return book.status.isOwn && !book.approved && book.requested !== -1;
      });
    default:
      return books;
  }
}

export function mapBookStatus(books, user){
  return books.map(book=>{
    let status = {};
    status.isOwn = (book.ownerId === user.id);
    status.userRequested = (book.requested === user.id);
    status.available = !status.isOwn && book.requested === -1;
    status.requested = book.requested !== -1 && !book.approved;
    if(status.isOwn){
      status.hasAction = false || (book.requested > -1 && !book.approved);
    }else{
      status.hasAction = (book.requested === -1) || (status.userRequested && !book.approved);
    }
    book.status = status;
    return book;
  }).sort((a,b)=>{return a.id - b.id});
}
