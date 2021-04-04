import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import FrameworkBuilder from '../framework-builder/FrameworkBuilder';
import FrameworkDialog from '../framework-builder/Framework-Dialog';

class Browse extends React.Component {
    render() {
      return [
        <Header/>,
        <div class="browsePage">
            <div class="filter -panel">
                <p>Filter's go here</p>
            </div>
            <div>

            </div>
            <div class="frameworks">
                <FrameworkDialog/>
                <Link to="/frameworkbuilder"><input id = "regButton" type="submit" value="Create New Framework" /></Link>
            </div>
        </div>,
        <Footer/>
      ]
    }
  }


export default Browse;