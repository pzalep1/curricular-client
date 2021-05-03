import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../components/favicon.png';
import FrameworkList from '../components/FrameworksList';
import PopUp from '../components/PopUp';
import './styles/UserDashboard.css';

class UserDashboard extends React.Component {
    state={
        show: false
    }
    toggleClick = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return [
            <div className = "user-dashboard">
                <div className="user-sidebar">
                    <div className="header-logo">
                        <Link to="/"><img className="user-dashboard-image" src={logo} alt="Curricular Coffee"/></Link>
                    </div>
                    <div className="user-sidebarbutton_wrapper" onClick={this.toggleClick}>
                        <button className="create-frameworkButton">Create New Framework</button>
                    </div>
                    {this.state.show ? <PopUp toggle={this.toggleClick} /> : null}
                </div>
                <div className="user-frameworks">
                    <FrameworkList/>
                </div>             
            </div>
        ]
    }

}


/*
<Link className="create-frameworkButton" to="/framework">Create New Framework</Link>
*/

export default UserDashboard;