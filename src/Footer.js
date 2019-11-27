import React from 'react';
import logo from './logo.svg';
import './skins/style.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div class="container">
        <div className="wp-footer">
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="wp-logo-ft">
                <a href="/"><img src={logo} alt=""></img></a>
              </div>
            </div>
            
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <div className="wp-info-ft">
                <ul>
                  <li><a href="/" alt=''>Thông tin 1</a></li>
                  <li><a href="/" alt=''>Thông tin 2</a></li>
                  <li><a href="/" alt=''>Thông tin 3</a></li>
                  <li><a href="/" alt=''>Thông tin 4</a></li>
                </ul>
              </div>
            </div>

            
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="wp-map">
                
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;