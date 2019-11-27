import React from 'react';
import './skins/style.css';
import img1 from './images/img-banner.jpg';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}
export default App;