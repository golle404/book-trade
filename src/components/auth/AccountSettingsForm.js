import React, { PropTypes } from 'react';

class AccountSettingsForm extends React.Component {

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
      <form className="form-account" onSubmit={this.onSubmit}>
        <label htmlFor="inputUsername">Username</label>
        <input
          id="inputUsername"
          defaultValue={this.props.user.username}
          type="text"
          ref="username"
          className="form-control"
          placeholder="Username"
          disabled />
        <label htmlFor="inputEmail">Email address</label>
        <input
          id="inputEmail"
          defaultValue={this.props.user.email}
          type="email"
          ref="email"
          className="form-control"
          placeholder="email"/>
        <label htmlFor="inputCountry">Country</label>
        <input
          id="inputCountry"
          defaultValue={this.props.user.country}
          type="text"
          ref="country"
          className="form-control"
          placeholder="Country" />
        <label htmlFor="inputCity">City</label>
        <input
          id="inputCity"
          defaultValue={this.props.user.city}
          type="city"
          ref="city"
          className="form-control"
          placeholder="City" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Save
        </button>
      </form>
    )
  }
}

AccountSettingsForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AccountSettingsForm;
