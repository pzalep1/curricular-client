import React from 'react';
import './styles/Footer.css'
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
      return [
        <div className="empty-container"></div>,
        <div className="footer">
          <ul>
            <li><a className = "footerlink" target = "_blank" href = "">Terms of Use</a></li>
            <li><a className = "footerlink" target = "_blank" href = "">Accessibility</a></li>
            <li><Link className = "footerlink" to="/browse">Meet the Team</Link></li>
          </ul>
        </div>
      ]      
    }
  }

  export default Footer;