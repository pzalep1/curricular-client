import React, {useState} from 'react';
import logo from './favicon.png';
import './styles/Header.css'
import {Link} from 'react-router-dom';

export default function Header(){

  function handleLogout() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <nav>
      <div className="header-logo">
        <Link to="/"><img className="header-image" src={logo} alt="Curricular Coffee"/></Link>
      </div>
      <div className="buttons">
      <button><Link className="header-button" to="/dashboard">DASHBOARD</Link></button><button onClick={handleLogout}><Link className="header-button" to="/">LOGOUT</Link></button>
      </div>
    </nav>
  )
  

}