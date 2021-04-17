import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './shared/header/Header.js';
import Footer from './shared/footer/Footer.js';
import Homepage from './pages/homepage/Homepage.js';
import Login from './pages/authentication/login/Login.js';
import Register from './pages/authentication/registration/Registration.js';
import FrameworkBuilder from './pages/framework-builder/FrameworkBuilder.js';
import GuidelineBuilder from './pages/framework-builder/GuidelineBuilder.js';
import FrameworkDetails from './pages/framework-details/FrameworkDetails.js';
import Dashboard from './pages/dashboard/Dashboard.js';

function App() {
  return ( 
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/frameworkbuilder/guidelines">
            <GuidelineBuilder/>
          </Route>
          <Route path="/frameworkbuilder">
            <FrameworkBuilder/>
          </Route>         
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path = "/admindashboard/frameworkdetails">
             <FrameworkDetails /> 
          </Route> 
          <Route path = "/admindashboard">
             <Dashboard /> 
          </Route>
          <Route path="/">
            <FrameworkDetails />
             {/* <Homepage boxes = {["Intro text", "featured accreditations", "Curricular Coffee featured in Forbes top 10 new startups"]}/>  */}
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App;
