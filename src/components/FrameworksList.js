import React from 'react';
import './styles/FrameworkList.css';
import {Link} from 'react-router-dom';
import GuidelinesPopup from './GuidelinesPopup';
export default class FrameworkList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            frameworks:[],
            count: 0,
            show: false
        }
    }

    componentDidMount() {
        this.getFrameworks();
    }

    async getFrameworks() {
        fetch(process.env.REACT_APP_API_URL+'/frameworks')
            .then(res => res.json())
            .then(data => {
                this.setState({frameworks: data})
                this.setState({count: data.length})
            })
            .catch(error => console.log(error));
    }

    toggleClick = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return [
            <div className="frameworkList-wrapper">
                <div className="frameworks-title">
                    <h1 className="admin-framework_title">Total Frameworks ({this.state.count})</h1>
                </div>
                <div className="framework-header">
                    <span>Name</span>
                    <span>Year</span>
                    <span>Author</span>
                    <span>Level</span>
                </div>
                <div className="frameworkList_list-wrapper">
                    <div>
                        {this.state.frameworks.map(framework => (
                            <div key={framework._id} className="framework-list">
                                <span>{framework.name}</span>
                                <span>{framework.year}</span>
                                <span>{framework.author}</span>
                                <span>{framework.levels}</span>
                                <button className="view-guidelinesbttn" onClick={this.toggleClick}>View Guidelines</button>
                                {this.state.show ? <GuidelinesPopup toggle={this.toggleClick} /> : null}
                            </div> ))}
                    </div>
                </div>
            </div>
        ]
    }
    
}

/*
<button className="dashboard-guideline-button">
                                    <Link className = "viewLink" to = {{
                                        pathname: "/admindashboard/frameworkdetails",
                                        state: {
                                            frameworkName: framework.name,
                                            author: framework.author,
                                            year: framework.year,
                                            level: framework.levels,
                                            guidellines: framework.guidelines
                                        }
                                        }}
                                     role = "button" >
                                         View Guidelines
                                    </Link>
                                </button>
*/