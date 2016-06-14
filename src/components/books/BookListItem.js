import React, { PropTypes } from 'react';
import BookActionButton from './BookActionButton';
import BookStatusLabel from './BookStatusLabel';

class BookListItem extends React.Component{

  constructor(props, context){
    super(props, context);
    this.onBookAction = this.onBookAction.bind(this);
  }

  onBookAction(e){
    const aType = e.target.name;
    this.props.onBookAction(this.props.book._id, aType);
  }

  render () {
    const book = this.props.book;
    let btnLabel = "Request Trade";
    let btnClass = "btn btn-primary";
    let btnName = "request";

    if(book.status.isOwn && book.requested != ""){
      btnLabel = "Approve";
      btnClass = "btn btn-success";
      btnName = "approve";
    }
    if(book.status.userRequested){
      btnLabel = "Cancel Request";
      btnClass = "btn btn-warning";
      btnName = "cancel";
    }

    return (
      <li className="list-group-item">
        <div className="book-container">
          <div className="book-info">
            <h4>{book.title}<small> by {book.author}</small></h4>
            <p><span>Book status: </span>
            {book.status.available && <BookStatusLabel label="Available" lblClass="info"/>}
            {book.status.isOwn && <BookStatusLabel label="Your Book" lblClass="danger"/>}
            {book.status.requested && <BookStatusLabel label="Requested" lblClass="warning"/>}
            {book.approved && <BookStatusLabel label="Approved" lblClass="success"/>}
            </p>
          </div>
          <div className="book-actions">
            {book.status.hasAction && <BookActionButton
                                        btnName={btnName}
                                        btnLabel={btnLabel}
                                        btnClass={btnClass}
                                        onBookAction={this.onBookAction} />}
          </div>
        </div>
      </li>
    );
  }
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
  onBookAction: PropTypes.func.isRequired
};

export default BookListItem;
