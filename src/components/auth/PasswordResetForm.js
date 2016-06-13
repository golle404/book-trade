import React, { PropTypes } from 'react';

class PasswordResetForm extends React.Component {

  constructor(props, context){
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.refs);
  }

  render() {
    return (
      <form className="form-pwd-reset" onSubmit={this.onSubmit}>
        <label htmlFor="inputPassword">New Password</label>
        <input
          id="inputPassword"
          type="password"
          ref="password"
          className="form-control"
          placeholder="New Password" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Reset
        </button>
      </form>
    );
  }
}

PasswordResetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default PasswordResetForm;
