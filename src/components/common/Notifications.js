import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {hideNotification} from '../../actions/notificationActions';

class Notifications extends React.Component {
 constructor(props, context){
   super(props, context);
 }

 componentDidUpdate(prevProp) {
   if(!prevProp.show){
     setTimeout(()=>{
       this.props.dispatch(hideNotification());
     },2000);
   }
 }

 render () {
   return (
     <div className={this.props.contClass}>
      <div className={this.props.alertClass}>{this.props.message}</div>
     </div>
   );
 }
}

Notifications.propTypes = {
  show: PropTypes.bool.isRequired,
  contClass: PropTypes.string.isRequired,
  alertClass: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state){
 return {
   show: state.notifications.show,
   contClass: "notifications-container" + (!state.notifications.show ? " hidden" : ""),
   alertClass: "alert alert-" + state.notifications.type,
   message: state.notifications.message
 };
}

export default connect(mapStateToProps)(Notifications);
