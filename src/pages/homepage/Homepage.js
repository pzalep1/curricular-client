import React from 'react';
import ReactDOM from 'react-dom';
import HomepageBox from './components/HomepageBox.js'
import './Homepage.css';

class Homepage extends React.Component {
    render() {
      return [
        <main id = "homePage">
            <HomepageBox id = "home1" boxcontent = {this.props.boxes[0]}/>
            <HomepageBox id = "home2" boxcontent = {this.props.boxes[1]}/>
            <HomepageBox id = "home3" boxcontent = {this.props.boxes[2]}/>
        </main>
      ]
    }
  }


export default Homepage;