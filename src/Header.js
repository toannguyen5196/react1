import React from 'react';
import logo from './images/logo.png';
import './skins/style.css';

function Header() {
  return (
    <header className="App-header">
      <div className="wp-header-pc hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
              <div className="wp-left-header">
                <div className="wp-logo">
                  <a href="/" alt=""><img src={logo} alt=""></img></a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
              <div className="wp-right-header">
                <nav>
                  
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;