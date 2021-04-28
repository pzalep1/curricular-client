import React from 'react';
import {Link} from 'react-router-dom';
import FrameworkList from '../components/FrameworksList';
import './styles/AdminDashboard.css';

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return [
            <div className = "admin-dashboard">
                <div className="admin-sidebar">
                    <div class="sidebar">
                        <div>Frameworks</div>
                    </div>
                </div>
                <div className="admin-frameworks">
                    <FrameworkList/>
                </div>             
            </div>
        ]
    }

}


export default AdminDashboard;