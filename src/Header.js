import React from 'react';
import logo from './logo.svg';
import './skins/style.css';

function Header() {
  return (
      <header className="App-header">
        <a href="/"><img className="logo-header" src={logo} alt=''></img></a>
        <div className="Title-logo"><h1>Header</h1></div>
      </header>
  );
}
export default Header;