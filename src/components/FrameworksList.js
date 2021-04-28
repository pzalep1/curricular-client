import React from 'react';
import './styles/FrameworkList.css';

export default class FrameworkList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            frameworks:[],
            count: 0
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
                                <span>{framework.name}</span><span>{framework.year}</span><span>{framework.author}</span><span>{framework.levels}</span><button className="dashboard-guideline-button">Guidelines</button>
                            </div> ))}
                    </div>
                </div>
            </div>
        ]
    }
    
}