import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
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
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

/*function mapStateToProps(state, ownProps){
  return {};
}*/

export default App;
//export default connect(mapStateToProps)(App);
