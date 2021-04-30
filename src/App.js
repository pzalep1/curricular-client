import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Browse from './pages/Browse';
import AdminDashboard from './pages/AdminDashboard';
import Guideline from './pages/Guideline';
import UserDashboard from './pages/UserDashboard';

function App() {
  
  return ([
    <Router>
      <div className="body-wrapper">
        <Switch>
          <Route exact path="/framework/:frameworkId/guidelines" component={Guideline}/>
          <Route exact path="/admin/dashboard" component={AdminDashboard}/>
          <Route exact path="/dashboard" component={UserDashboard}/>
          <Route exact path="/browse" component={Browse}/>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  ]);
}

export default App;
