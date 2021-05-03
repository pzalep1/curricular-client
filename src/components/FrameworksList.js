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
            show: false,
            keys:[]
        }
        this.isShowing = this.isShowing.bind(this)
    }

    componentDidMount() {
        this.getFrameworks();
        (typeof this.props.searchResults != "undefined") ? console.log(this.props.searchResults) : console.log("nothing");
    }

    async getFrameworks() {
        fetch(process.env.REACT_APP_API_URL+'/frameworks')
            .then(res => res.json())
            .then(data => {
                data.forEach(function (elem) {
                    elem.showing = false;
                })
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

    isShowing(frameId) {
        let copyFrames = [...this.state.frameworks];
        for (let j = 0; j < copyFrames.length; j++) {
            if (copyFrames[j]._id === frameId) {
                copyFrames[j].showing = !copyFrames[j].showing;
            }
        }
        this.setState({show: !this.state.show});
        this.setState({frameworks: copyFrames});
    }

    releaseFramework(id) {
        fetch(process.env.REACT_APP_API_URL+'/frameworks/'+id, {
            method: 'PATCH',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "framework" : {"status" : "released" }})
        })
            .then(res => {
                res.json();
                this.getFrameworks();
            })
        }

    checkSearch(frameworkID) {
        if (typeof this.props.searchResults !== "undefined") {
            let flag = false;
            for (let j = 0; j < this.props.searchResults.length; j++) {
                if (this.props.searchResults[j]._id === frameworkID) {
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
            return [
                <div className="frameworkList-wrapper">
                <div className="frameworks-title">
                    <h1 className="admin-framework_title">Results:</h1>
                </div>
                <div className="framework-header">
                    <span>Name</span>
                    <span>Year</span>
                    <span>Author</span>
                    <span>Level</span>
                </div>
                <div className="frameworkList_list-wrapper">
                    <div>
                        {this.state.released.map(framework => (
                            <li key={framework._id} className={this.checkSearch(framework._id) ? "framework-list" : "hidden-framework"}>
                                <span>{framework.name}</span>
                                <span>{framework.year}</span>
                                <span>{framework.author}</span>
                                <span>{framework.levels}</span>
                                <button key={framework._id} className="view-guidelinesbttn" onClick={() => this.isShowing(framework._id)}>View Guidelines</button>
                                {<GuidelinesPopup show = {framework.showing} fid = {framework._id} key={framework._id} framework={framework} toggle = {this.isShowing} />}
                            </li> ))}
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
                    <div className="admin-framework-header">
                        <span>Name</span>
                        <span>Year</span>
                        <span>Author</span>
                        <span>Level</span>
                    </div>
                    <div className="frameworkList_list-wrapper">
                        <div>
                            {this.state.frameworks.map((framework )=> 
                               (<li key={framework._id} className="admin_framework-list" >
                                    <span>{framework.name}</span>
                                    <span>{framework.year}</span>
                                    <span>{framework.author}</span>
                                    <span>{framework.levels}</span>
                                    <button key={framework._id} className="view-guidelinesbttn" onClick={() => this.isShowing(framework._id)}>View Guidelines</button>
                                    {<GuidelinesPopup show = {framework.showing} fid = {framework._id} key={framework._id} framework={framework} toggle = {this.isShowing} />}
                                    {framework.status === 'released' ? null: <button onClick={() => this.releaseFramework(framework._id)}>Release Framework</button>}
                                </li> ) 
                            )}
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