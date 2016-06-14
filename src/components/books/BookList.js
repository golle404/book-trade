import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {setBookFilter} from '../../actions/booksActions';
import {updateBookStatus} from '../../actions/ajaxActions';
import {showNotification} from '../../actions/notificationActions';
import {filterBooks, filterButtons, mapBookStatus} from '../../utils/bookUtils';

import BookListItem from './BookListItem';

class BookList extends React.Component {
  constructor(props, context){
    super(props, context);

    this.setBookFilter = this.setBookFilter.bind(this);
    this.onBookAction = this.onBookAction.bind(this);
    this.addBookRedirect = this.addBookRedirect.bind(this);
  }

  setBookFilter(e){
    const fType = e.target.name;
    this.props.dispatch(setBookFilter(fType));
  }

  onBookAction(bookId, aType){
    this.props.dispatch(updateBookStatus(bookId, aType))
      .then(()=>{
        this.notify(aType);
      })
      .catch((error)=>{throw(error);});
  }

  notify(aType){
    let alert = {};
    switch (aType) {
      case "approve":
        alert.type = "success";
        alert.message = "Trade Approved !!!";
        break;
      case "request":
        alert.type = "info";
        alert.message = "Request Sent.";
        break;
      case "cancel":
        alert.type = "danger";
        alert.message = "Request Cancelled.";
        break;
      default:
        break;
    }
    this.props.dispatch(showNotification(alert));
  }

  addBookRedirect(){
    this.context.router.push("/add-book");
  }

  render () {
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row">
              <div className="col-md-12">
                <h4 className="pannel-title">Books For Trade</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                  <div className="btn-group" role="group">
                    {filterButtons.map(btn=>{
                      return (
                        <button
                          type="button"
                          className={btn.btnClass}
                          disabled={btn.name === this.props.filterType}
                          onClick={this.setBookFilter}
                          name={btn.name}
                          key={btn.name}>
                            {btn.caption}
                          </button>
                      );
                    })}
                  </div>
              </div>
              <div className="col-md-4">
                <button type="button" className="btn btn-default pull-right" onClick={this.addBookRedirect}>
                    Add Book
                  </button>
              </div>
            </div>
          </div>
          <ul className="list-group">
            {this.props.books.map((book, id)=>{
              return (
                <BookListItem key={id} book={book} onBookAction={this.onBookAction}/>
              );
            })}
          </ul>
        </div>
    );
  }
}

BookList.propTypes = {
  user: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

BookList.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  const { books, filterType } = state.books;
  const user = state.user;
  const filtered = filterBooks(mapBookStatus(books, user), filterType);
  return {
    user: user,
    books: filtered,
    filterType: filterType
  };
}

export default connect(mapStateToProps)(BookList);
/*
<div className="btn-group pull-right" role="group">
  <button
    type="button"
    className="btn btn-primary"
    onClick={this.addBookRedirect}>Add Book</button>
</div>*/
