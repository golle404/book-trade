import React, { PropTypes } from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import LoadingIcon from './../common/LoadingIcon';

const Header = ({numAjaxCalls, user}) => {
  let AuthSeg;
  if(user.auth){
    AuthSeg = <li><Link to={"/user/" + user.username +"/settings"} activeClassName="active">Account Settings</Link></li>
  }else{
    AuthSeg = <li><Link to="/auth" activeClassName="active">Login</Link></li>
  }
  return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <a href="#">Book Trade App</a>
            </div>
          </div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home <span className="sr-only">(current)</span></IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {numAjaxCalls > 0 && <li><a><LoadingIcon /></a></li>}
            {AuthSeg}
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
