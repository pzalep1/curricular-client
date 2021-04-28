import React from 'react';
import './styles/Browse.css';
import FrameworkList from './../components/FrameworksList';
import Header from './../components/Header';

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filterFrameworks: [],
            frameworks: []
        }
        this.optRef = React.createRef();
        this.filterByName = this.filterByName.bind(this);
        this.filterByLevel = this.filterByLevel.bind(this);
        this.filterByYear = this.filterByYear.bind(this);
    }   

    handleChange() {
        console.log("method not implemented");
    }

    filterByName(e) {
        let filt = [...this.state.filterFrameworks];
        let newFilt = [];
        filt.map(f => {f.frameworkName[0].toUpperCase() == e.target.value && newFilt.push(f)});
        this.setState({filterFrameworks: newFilt});
    }

    filterByLevel(e) {
        let filt = [...this.state.filterFrameworks];
        let newFilt = []; 
        filt.map(f => {f.level == e.target.value && newFilt.push(f)});
        this.setState({filterFrameworks: newFilt});
    }

    filterByYear(e) {
        let filt = [...this.state.filterFrameworks];
        let newFilt = []; 
        filt.map(f => {f.year == e.target.value && newFilt.push(f)});
        this.setState({filterFrameworks: newFilt});
    }

    updateSearch(e) {
        let tempFrames = [...this.state.frameworks];
        let resFrames = [];
        //search either by name, year, level, or author 
        for (let a = 0; a < tempFrames.length; a++) switch ("Name") {
            case "Name":
                tempFrames[a].frameworkName.toLowerCase().includes(e.target.value.toLowerCase()) && resFrames.push(tempFrames[a]);
                break;
            case "Year":
                tempFrames[a].year.toLowerCase().includes(e.target.value.toLowerCase()) && resFrames.push(tempFrames[a]);
                break;
            case "Level":
                tempFrames[a].level.toLowerCase().includes(e.target.value.toLowerCase()) && resFrames.push(tempFrames[a]);
                break;
            case "Author":
                tempFrames[a].author.toLowerCase().includes(e.target.value.toLowerCase()) && resFrames.push(tempFrames[a])
        }
        this.setState({filterFrameworks: resFrames});
    }

    render() {
        return [
            <Header/>,
            <main className="browse-page">
                <div className ="filter-bar">
                    <h4 className="filter-title">Filters</h4>
                    <div className ="filters">
                    <form id = "filterForm">
                        <label className = "filterLabel" htmlFor = "authorName">Contributing Organization</label>
                        <br />
                        <select className = "filterSelect" id = "authorName" onChange = {event => this.filterByName(event)}>
                            {' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => <option value = {letter}>{letter}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "edLevel">Education Level</label>
                        <br />
                        <select className = "filterSelect" id = "edLevel" onChange = {event => this.filterByLevel(event)}>
                            {["","K-12", "Collegiate", "Postgraduate", "Professional"].map(lev => <option value = {lev}>{lev}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "frameworkYear">Year</label>
                        <br />
                        <select className = "filterSelect" id = "frameworkYear" onChange = {event => this.filterByYear(event)}>
                            {[...Array(36).keys()].map(y => <option value = {1995+y}>{1995+y}</option>)}
                        </select>
                        <button>APPLY FILTERS</button>
                    </form>

                    </div>
                </div>
                
                <div className ="browse-frameworks-list">
                    <div className="browse-searchWrapper">
                        <input
                            className="browse-search"
                            placeholder="Search curriculum by organizations or keywords..."
                            defaultValue={this.state.search} 
                            onChange={event => this.updateSearch(event)}
                        />
                        {/* <label className="search-icon"><i className="fas fa-search"></i></label> */}
                    </div>
                    <div className="browse-frameworks">
                        <FrameworkList/>
                    </div>
                </div>
            </main>
        ]
    }

}


export default Browse;