/* eslint-disable react/no-set-state */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {authFormSubmit} from '../../actions/ajaxActions';

class AuthPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {register: false};
    this.setFormRole = this.setFormRole.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  setFormRole(e){
    e.preventDefault();
    const reg = (e.target.name === "register");
    this.setState({register: reg});
  }

  onFormSubmit(e){
    e.preventDefault();
    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      register: this.state.register
    };
    this.props.dispatch(authFormSubmit(formData))
        .then(()=>{this.redirect();})
        .catch((error)=>{throw(error);
      });
  }

  redirect(){
    this.context.router.push("/books");
  }

  render () {
    return (
      <div className="container login-container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <ul className="nav nav-pills">
              <li role="presentation" className={this.state.register ? "" : "active"}>
                <a href="#" name="login" onClick={this.setFormRole}>Login</a>
              </li>
              <li role="presentation" className={this.state.register ? "active" : ""}>
                <a href="#" name="register" onClick={this.setFormRole}>Register</a>
              </li>
            </ul>
          </div>
          <div className="panel-body">
            <form className="form-signin" onSubmit={this.onFormSubmit}>
              <h2 className="form-signin-heading">Please {this.state.register ? "Register" : "Login"}</h2>
              <label htmlFor="inputUsername">Username</label>
              <input
                id="inputUsername"
                ref="username"
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                required autoFocus />
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                name="password"
                ref="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required />
              <button className="btn btn-lg btn-primary btn-block" type="submit">
                {this.state.register ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

AuthPage.contextTypes = {
  router: PropTypes.object
};

export default connect()(AuthPage);
