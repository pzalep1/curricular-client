import React from 'react';
import './styles/Footer.css'
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
      return [
        <div className="empty-container"></div>,
        <div className="footer">
          <ul>
            <li><a className = "footerlink" target="http://34.193.243.127:3000/api" href = "http://34.193.243.127:3000/api">Coffee-Service API</a></li>
          </ul>
        </div>
      ]      
    }
  }

  export default Footer;