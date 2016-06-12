import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {accountSettingsSubmit} from '../../actions/ajaxActions';
import {showNotification} from '../../actions/notificationActions';

import AccountSettingsForm from './AccountSettingsForm';

class Dashboard extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(formRefs){
    const formData = {
      id: this.props.user._id,
      email: formRefs.email.value,
      country: formRefs.country.value,
      city: formRefs.city.value
    };

    this.props.dispatch(accountSettingsSubmit(formData))
        .then(()=>{this.redirect();})
        .catch((error)=>{throw(error);
      });
  }

  redirect(){
    let alert = {};
    alert.type = "info";
    alert.message = "Acocount Settings Changed.";
    this.props.dispatch(showNotification(alert));
  }

  render () {
    return (
      <div className="container login-container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="pannel-title">Change Account Settings</h4>
          </div>
          <div className="panel-body">
            <AccountSettingsForm user={this.props.user} onSubmit={this.onFormSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

Dashboard.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Dashboard);
