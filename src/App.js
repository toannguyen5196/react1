import React from 'react';
import logo from './logo.svg';
import './skins/style.css';
import img1 from './images/img-banner.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/"><img className="logo-header" src={logo} alt=''></img></a>
        <div className="Title-logo"><h1>Header</h1></div>
      </header>
      <main className="App-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={img1} alt=''></img>
            </div>
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <div className="img-tin">
                <a href="/"><img src={require('./images/logo.png')} alt=''></img></a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <h2 className="text-center">Rất là bướng</h2>
      </footer>
    </div>
  );
}
export default App;