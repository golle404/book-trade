import React from 'react';

const AboutPage = () => {
  return (
        <div className="container">
          <div className="well well-lg">
            <p>Book Trading App is my impementation of FreeCodeCamp
              <a href="https://www.freecodecamp.com/challenges/manage-a-book-trading-club"> "Manage a Book Trading Club" </a>
               challenge
            </p>
            <p>With Book Trading App users can view books offered by other users, add their own books and make and accept trade offers.</p>
            <p>
              <a href="https://www.freecodecamp.com">FreeCodeCamp </a> is an open source community that helps you learn to code.
            </p>
            <div className="about-tools">
              <h3>Main tools and libraries used:</h3>
              <h4>Backend:</h4>
              <ul>
                <li>
                  <a href="https://nodejs.org/en/">Node.js</a>
                </li>
                <li>
                  <a href="http://expressjs.com/">Express.js</a>
                </li>
                <li>
                  <a href="https://www.firebase.com/">Firebase</a>
                </li>
              </ul>
              <h4>Frontend:</h4>
              <ul>
                <li>
                  <a href="https://facebook.github.io/react/">React.js</a>
                </li>
                <li>
                  <a href="https://github.com/reactjs/react-router">React Router</a>
                </li>
                <li>
                  <a href="https://reduxframework.com/">Redux</a>
                </li>
                <li>
                  <a href="https://github.com/reactjs/react-redux">React Redux</a>
                </li>
                <li>
                  <a href="https://github.com/coryhouse/react-slingshot">React Slingshot! Boilerpalte</a>
                </li>
                <li>
                  <a href="http://getbootstrap.com/">Bootstrap</a>
                </li>
                <li>
                  <a href="https://bootswatch.com/slate/">Slate Bootstrap Theme</a>
                </li>
              </ul>
            </div>
            <p>
              <a href="https://github.com/golle404/book-trade">
                Source
              </a>
              {" | "}
              <a href="https://www.freecodecamp.com/golle404">
                FreeCodeCamp profile
              </a>
            </p>
          </div>
        </div>
  );
};

export default AboutPage;
