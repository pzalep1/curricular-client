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
        this.optRef2 = React.createRef();
        this.optRef3 = React.createRef();
        this.searchRef = React.createRef();
        this.filterByName = this.filterByName.bind(this);
        this.filterByLevel = this.filterByLevel.bind(this);
        this.filterByYear = this.filterByYear.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
    }   

    componentDidMount() {
        this.getFrameworks();
    }

    async getFrameworks() {
        fetch(process.env.REACT_APP_API_URL+'/frameworks')
            .then(res => res.json())
            .then(data => {
                this.setState({frameworks: data})
                this.setState({filterFrameworks: data});
                this.setState({count: data.length})
                // let editFworks = [...this.state.frameworks];
                // editFworks.forEach(function(e) {
                //     e.searchResult = true;
                // })
                // this.setState({frameworks: editFworks});
            })
            .catch(error => console.log(error));
    }

    handleChange() {
        console.log("method not implemented");
    }

    filterByName(e) {
        let filt = [...this.state.filterFrameworks];
        let newFilt = [];
        filt.map(f => {f.name[0].toUpperCase() == e.target.value && newFilt.push(f)});
        this.setState({filterFrameworks: newFilt});
    }

    filterByLevel(e) {
        let filt = [...this.state.filterFrameworks];
        let newFilt = []; 
        filt.map(f => {f.levels[0] == e.target.value && newFilt.push(f)});
        this.setState({filterFrameworks: newFilt});
    }

    filterByYear(e) {
        let filt = [...this.state.filterFrameworks];
        let newFilt = []; 
        filt.map(f => {f.year == e.target.value && newFilt.push(f)});
        newFilt.length != 0 && this.setState({filterFrameworks: newFilt});
    }

    generalFilter(e) {

    }

    filterByAuthor(e) {
        
        let filt = [...this.state.filterFrameworks];
        let newFilt = []; 
        e.target.value != " " && filt.map(f => {f.author[0].toUpperCase() == e.target.value && newFilt.push(f)});
        this.setState({filterFrameworks: newFilt});      
    }

    updateSearch(e) {
        let tempFrames = [...this.state.frameworks];
        let resFrames = [];
        //search either by name, year, level, or author 
        if (e.target.value != "") {
            for (let a = 0; a < tempFrames.length; a++) switch ("Name") {
                case "Name":
                    tempFrames[a].name.toLowerCase().includes(e.target.value.toLowerCase()) && resFrames.push(tempFrames[a]);
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
        } else {
            resFrames = tempFrames;
        }
        this.setState({search: e.target.value.toLowerCase()});
        this.setState({filterFrameworks: resFrames});
    }

    resetFilters(e) {
        e.preventDefault();
        this.optRef.current.value = " ";
        this.optRef2.current.value = " ";
        this.optRef3.current.value = 1995;
        this.searchRef.current.value = "";
        this.setState({search: ''});
        this.setState({filterFrameworks: [...this.state.frameworks]});
    }

    render() {
        return [
            <Header/>,
            <main className="browse-page">
                <div className ="filter-bar">
                    <h4 className="filter-title">Filters</h4>
                    <div className ="filters">
                    <form id = "filterForm" >
                        <label className = "filterLabel" htmlFor = "authorName">Contributing Organization</label>
                        <br />
                        <select ref = {this.optRef} className = "filterSelect" id = "authorName" onChange = {event => this.filterByAuthor(event)}>
                            {' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => <option value = {letter}>{letter}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "edLevel">Education Level</label>
                        <br />
                        <select ref = {this.optRef2} className = "filterSelect" id = "edLevel" onChange = {event => this.filterByLevel(event)}>
                            {["","K-12", "Collegiate", "Postgraduate", "Professional"].map(lev => <option value = {lev}>{lev}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "frameworkYear">Year</label>
                        <br />
                        <select ref = {this.optRef3} className = "filterSelect" id = "frameworkYear" onChange = {event => this.filterByYear(event)}>
                            {[" "].concat([...Array(36).keys()]).map(y => <option value = {1995+y}>{1995+y}</option>)}
                        </select>
                        <button onClick = {this.resetFilters}>Reset Filters</button>
                        
                    </form>

                    </div>
                </div>
                
                <div className ="browse-frameworks-list">
                    <div className="browse-searchWrapper">
                        <input
                            ref = {this.searchRef}
                            className="browse-search"
                            placeholder="Search curriculum by organizations or keywords..."
                            defaultValue={this.state.search} 
                            onChange={event => this.updateSearch(event)}
                        />
                        {/* <label className="search-icon"><i className="fas fa-search"></i></label> */}
                    </div>
                    <div className="browse-frameworks">
                        <FrameworkList searchResults = {this.state.filterFrameworks}/>
                    </div>
                </div>
            </main>
        ]
    }

}


export default Browse;