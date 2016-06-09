import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Book Trading</h1>
        <p>Book Trading is simple App that alows users to trade their books.</p>
        <p><Link to="/auth" className="btn btn-primary btn-lg">Login or Register to continue</Link></p>
      </div>
    </div>
  );
};

export default HomePage;
