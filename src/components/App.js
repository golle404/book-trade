import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import Footer from './common/Footer';
import Notifications from './common/Notifications';

class App extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render () {
    return (
      <div className="main">
        <Notifications />
        <Header />
        <div className="container-main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
