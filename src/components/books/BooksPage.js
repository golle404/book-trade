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
   if(!this.props.user.auth){
     this.props.actions.getAuthUser()
      .then(()=>{
        this.getBooksData();
      }).catch((error)=>{
        this.redirect();
        throw(error);
      });
   }else{
    this.getBooksData();
   }
 }

 redirect(){
   this.context.router.push("/auth");
 }

 getBooksData(){
    this.props.actions.getBooksData()
      .then(()=>{
        //console.log("books loaded");
      }).catch((error)=>{
        this.redirect();
        //throw(error);
      });
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

BooksPage.contextTypes = {
  router: PropTypes.object
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
