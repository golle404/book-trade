import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {accountSettingsSubmit} from '../../actions/ajaxActions';
import {showNotification} from '../../actions/notificationActions';

class AccountSettingsPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();
    const formData = {
      id: this.props.id,
      email: this.refs.email.value,
      password: this.refs.password.value
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
    this.context.router.push("/user/" + this.props.username);
  }

  render () {
    return (
      <div className="container login-container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="pannel-title">Change Account Settings</h4>
          </div>
          <div className="panel-body">
            <form className="form-signin" onSubmit={this.onFormSubmit}>
              <label htmlFor="inputUsername">Username</label>
              <input
                id="inputUsername"
                defaultValue={this.props.username}
                type="text"
                ref="username"
                className="form-control"
                placeholder="Username"
                disabled />
              <label htmlFor="inputEmail">Email address</label>
              <input
                id="inputEmail"
                defaultValue={this.props.email}
                onChange={this.onInputChange}
                type="email"
                ref="email"
                className="form-control"
                placeholder="email"/>
              <label htmlFor="inputPassword">Password</label>
              <input
                id="inputPassword"
                defaultValue={this.props.password}
                onChange={this.onInputChange}
                type="password"
                ref="password"
                className="form-control"
                placeholder="Password"
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

AccountSettingsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired
};

AccountSettingsPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  let pass = state.user.password;
  let email = state.user.email;
  let username = state.user.username;
  let id = state.user.id;
  return {
    password: pass,
    email: email,
    username: username,
    id: id
  };
}

export default connect(mapStateToProps)(AccountSettingsPage);
