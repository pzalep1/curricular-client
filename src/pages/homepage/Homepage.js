import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomepageBox from './components/HomepageBox.js'
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import './Homepage.css';

class Homepage extends React.Component {
    render() {
      return [
        <Header/>,
        <main id = "homePage">
          <HomepageBox id = "home1" boxcontent = {this.props.boxes[0]}/>
          <HomepageBox id = "home2" boxcontent = {this.props.boxes[1]}/>
          <HomepageBox id = "home3" boxcontent = {this.props.boxes[2]}/>
          <HomepageBox id = "home4" boxcontent = {<Link to="/frameworkbuilder"><input id = "regButton" type="submit" value="New Framework" /></Link>}/>
          <div>
            
          </div>
        </main>,
        <Footer/>
      ]
    }
  }


export default Homepage;