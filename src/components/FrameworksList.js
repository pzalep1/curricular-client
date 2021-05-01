import React from 'react';
import './styles/FrameworkList.css';
import GuidelinesPopup from './GuidelinesPopup';
export default class FrameworkList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            frameworks:[],
            released: [],
            count: 0,
            releasedCount: 0,
            show: false
        }
    }

    componentDidMount() {
        this.getFrameworks();
        (typeof this.props.searchResults != "undefined") ? console.log(this.props.searchResults) : console.log("nothing");
    }

    async getFrameworks() {
        fetch(process.env.REACT_APP_API_URL+'/frameworks')
            .then(res => res.json())
            .then(data => {
                this.setState({frameworks: data})
                this.setState({count: data.length})
                let released = data.filter(framework => {
                    if (framework.status === "released") {
                        return framework
                    }
                })
                this.setState({released: released})
                this.setState({releasedCount: this.state.released.length})
            })
            .catch(error => console.log(error));
    }

    toggleClick = () => {
        this.setState({show: !this.state.show});
    }

    checkSearch(frameworkID) {
        console.log("checking search");
        if (typeof this.props.searchResults != "undefined") {
            let flag = false;
            for (let j = 0; j < this.props.searchResults.length; j++) {
                if (this.props.searchResults[j]._id == frameworkID) {
                    flag = true;
                }
            }
            return flag;
        } else {
            return true;
        }
    }

    render() {
        if (window.location.pathname === '/browse' || window.location.pathname === '/browse?') {
            console.log("rendering browse list")
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
                            <div key={framework._id} className={this.checkSearch(framework._id) ? "framework-list" : "hidden-framework"}>
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
        } else {
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
                                <div key={framework._id} className="framework-list" >
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