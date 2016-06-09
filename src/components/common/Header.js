import React, { PropTypes } from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import LoadingIcon from './../common/LoadingIcon';

const Header = ({numAjaxCalls, user}) => {
  return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <Link to="/" activeClassName="active">Book Trading</Link>
            </div>
          </div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home <span className="sr-only">(current)</span></IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            {user.auth && <li><Link to={"/books"} activeClassName="active">Trade Books</Link></li>}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {numAjaxCalls > 0 && <li><a><LoadingIcon /></a></li>}
            {user.auth && <li><Link to={"/account-settings"} activeClassName="active">Account Settings</Link></li>}
            {!user.auth && <li><Link to="/auth" activeClassName="active">Login</Link></li>}
          </ul>
        </div>
      </nav>
  );
};

Header.propTypes = {
  numAjaxCalls: PropTypes.number.isRequired
};

function mapStateToProps(state){
  return{
    numAjaxCalls: state.ajaxCalls,
    user: state.user
  };
}

export default connect(mapStateToProps)(Header);
