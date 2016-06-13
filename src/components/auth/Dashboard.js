import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {accountSettingsSubmit, resetPasswordSubmit} from '../../actions/ajaxActions';
import {showNotification} from '../../actions/notificationActions';
import AccountSettingsForm from './AccountSettingsForm';
import PasswordResetForm from './PasswordResetForm';

class Dashboard extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onPasswordReset = this.onPasswordReset.bind(this);
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

  onPasswordReset(formRefs){
    const formData = {
      id: this.props.user._id,
      password: formRefs.password.value
    };

    this.props.dispatch(resetPasswordSubmit(formData))
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
            <h4 className="pannel-title">Update Profile</h4>
          </div>
          <div className="panel-body">
            <AccountSettingsForm user={this.props.user} onSubmit={this.onFormSubmit}/>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="pannel-title">Reset Password</h4>
          </div>
          <div className="panel-body">
            <PasswordResetForm onSubmit={this.onPasswordReset}/>
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


function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Dashboard);
