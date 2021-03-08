import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css'

class Footer extends React.Component {
    render() {
      return <footer>
        <ul>
          <li><a className = "footerlink" target = "_blank" href = "">Terms of Use</a></li>
          <li><a className = "footerlink" target = "_blank" href = "">Accessibility</a></li>
          <li><a className = "footerlink" target = "_blank" href = "">Meet the Team</a></li>
        </ul>
      </footer>
    }
  }

  export default Footer;