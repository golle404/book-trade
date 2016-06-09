import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {newBookSubmit} from '../../actions/ajaxActions';
import {showNotification} from '../../actions/notificationActions';

class AddBookPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();
    const formData = {
      title: this.refs.bookTitle.value,
      author: this.refs.bookAuthor.value,
      ownerId: this.props.user.id
    };
    this.props.dispatch(newBookSubmit(formData))
        .then(()=>{this.redirect();})
        .catch((error)=>{throw(error);
      });
  }

  redirect(){
    let alert = {};
    alert.type = "success";
    alert.message = "New Book Added !!!";

    this.props.dispatch(showNotification(alert));
    this.context.router.push("/books");
  }

  render () {
    return (
      <div className="container add-book-container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="pannel-title">Add New Book</h4>
          </div>
          <div className="panel-body">
            <form className="form-signin" onSubmit={this.onFormSubmit}>
              <label htmlFor="bookTitle">Book Title</label>
              <input
                type="text"
                ref="bookTitle"
                id="bookTitle"
                className="form-control"
                placeholder="Book Title"
                required autoFocus />
              <label htmlFor="bookAuthor">Author</label>
              <input
                type="text"
                ref="bookAuthor"
                id="bookAuthor"
                className="form-control"
                placeholder="Book Author"
                required />
              <button className="btn btn-lg btn-primary btn-block" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddBookPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

AddBookPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AddBookPage);
