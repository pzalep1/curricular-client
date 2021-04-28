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

//Auth components
import useToken from './components/useToken';
import Authentication from './components/Authentication';




function App() {
  
  const {access_token, setToken} = useToken(); 
  
  if(!access_token) {
    return <Router><Authentication setToken={setToken}/></Router>
  }

  return ([
    <Router>
      <div className="body-wrapper">
        <Switch>
          <Route path="/framework/guidelines">
            <Guideline/>
          </Route>
          <Route path="/admin/dashboard">
            <AdminDashboard/>
          </Route>
          <Route path="/dashboard">
            <UserDashboard/>
          </Route>
          <Route path="/browse">
            <Browse/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  ]);
}

export default App;
