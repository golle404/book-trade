import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ajaxActions from '../../actions/ajaxActions';

import BookList from './BookList';

class BooksPage extends React.Component {
 constructor(props, context){
   super(props, context);
 }

 componentWillMount() {
   this.props.actions.getBooksData();
 }

 render () {
   return (
     <div className="container">
      <h1>Welcome {this.props.user.username}</h1>
      <BookList />
     </div>
   );
 }
}

BooksPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    user: state.user
  };
}
function mapDispatchToProps(dispatch){
 return {
     actions: bindActionCreators(ajaxActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
