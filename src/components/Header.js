import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import logo from './favicon.png';
import './styles/Header.css';

 //Auth components
import useToken from './useToken';
import AuthenticationPopup from './AuthenticationPopup';

export default function Header(){

  function handleLogout() {
    sessionStorage.clear();
    window.location.reload();
  }

  const {access_token, setToken} = useToken(); 

  const [login, setLogin] = useState(false);
  
  function renderButtons() {
    if (access_token) {
      return[
        <div className="buttons">
          <button><Link className="header-button" to="/dashboard">DASHBOARD</Link></button><button onClick={handleLogout}><Link className="header-button" to="/">LOGOUT</Link></button>
        </div>
      ] 
    } else {
      return <button className="header-button" onClick={toggleClick}>CONTRIBUTORS</button>
    }
  }

  function toggleClick() {
    setLogin(!login);
  }

  return (
    <nav>
      <div className="header-logo">
        <Link to="/"><img className="header-image" src={logo} alt="Curricular Coffee"/></Link>
      </div>
        {renderButtons()}
        {login ? <AuthenticationPopup toggle={toggleClick} setToken={setToken}/> : null}
    </nav>
  )
}