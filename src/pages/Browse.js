import React from 'react';
import './styles/Browse.css';
import FrameworkList from './../components/FrameworksList';
import Header from './../components/Header';

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            authorFilter: '',
            levelFilter: '',
            yearFilter: '',
            filterFrameworks: [],
            frameworks: []
        }
        this.optRef = React.createRef();
        this.optRef2 = React.createRef();
        this.optRef3 = React.createRef();
        this.searchRef = React.createRef();
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
            })
            .catch(error => console.log(error));
    }

    handleChange() {
        console.log("method not implemented");
    }

    generalFilter(e) {
        let filt = [];
        if (this.state.search == '') {
            filt = [...this.state.frameworks];
        } else {
            filt = [...this.state.frameworks];
            let nf = [];
            for (let a = 0; a < filt.length; a++) {
                filt[a].name.toLowerCase().includes(this.state.search.toLowerCase()) && nf.push(filt[a]);
            } 
            filt = nf;
        }
        switch (e.target.id) {
            case "authorName":
                let newFilt1 = [];
                if (this.state.levelFilter != '') {
                    filt.map(f => {f.levels[0] == this.state.levelFilter && newFilt1.push(f)});
                } else {
                    newFilt1 = filt;
                }
                let newFilt2 = [];
                if (this.state.yearFilter != '') {
                    newFilt1.map(f => {f.year == this.state.yearFilter && newFilt2.push(f)});
                } else {
                    newFilt2 = newFilt1;
                }
                let newFilt3 = [];
                this.setState({authorFilter: e.target.value}, () => {
                    newFilt2.map(f => {f.author[0].toUpperCase() == this.state.authorFilter && newFilt3.push(f)});
                    this.setState({filterFrameworks: newFilt3});  
                });
                break;
            case "edLevel":
                let newFilt11 = [];
                if (this.state.authorFilter != '') {
                    filt.map(f => {f.author[0].toUpperCase() == this.state.authorFilter && newFilt11.push(f)});
                } else {
                    newFilt11 = filt;
                }
                let newFilt22 = [];
                if (this.state.yearFilter != '') {
                    newFilt11.map(f => {f.year == this.state.yearFilter && newFilt22.push(f)});
                } else {
                    newFilt22 = newFilt11;
                }
                let newFilt33 = [];
                this.setState({levelFilter: e.target.value}, () => {
                    newFilt22.map(f => {f.levels[0] == this.state.levelFilter && newFilt33.push(f)});
                    this.setState({filterFrameworks: newFilt33});  
                });
                break;
            case "frameworkYear":
                let newFilt111 = [];
                if (this.state.authorFilter != '') {
                filt.map(f => {f.author[0].toUpperCase() == this.state.authorFilter && newFilt111.push(f)});
                } else {
                newFilt111 = filt;
                }
                let newFilt222 = [];
                if (this.state.levelFilter != '') {
                newFilt111.map(f => {f.levels[0] == this.state.levelFilter && newFilt222.push(f)});                  
                } else {
                newFilt222 = newFilt111;
                }
                let newFilt333 = [];
                this.setState({yearFilter: e.target.value}, () => {
                    newFilt222.map(f => {f.year == this.state.yearFilter && newFilt333.push(f)});
                    this.setState({filterFrameworks: newFilt333});  
                });
                break;
        }
        
    }

    updateSearch(e) {
        let tempFrames = (this.state.authorFilter == '' && this.state.yearFilter == '' && this.state.levelFilter == '') ? [...this.state.frameworks] : [...this.state.filterFrameworks];
        let resFrames = [];
        //search either by name, year, level, or author 
        if (e.target.value != "") {
            for (let a = 0; a < tempFrames.length; a++) {
                tempFrames[a].name.toLowerCase().includes(e.target.value.toLowerCase()) && resFrames.push(tempFrames[a]);
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
        this.optRef3.current.value = "";
        this.searchRef.current.value = "";
        this.setState({filterFrameworks: [...this.state.frameworks],
                        search: '',
                        authorFilter: '',
                        yearFilter: '',
                        levelFilter: ''});
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
                        <select ref = {this.optRef} className = "filterSelect" id = "authorName" onChange = {event => this.generalFilter(event)}>
                            {' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => <option value = {letter}>{letter}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "edLevel">Education Level</label>
                        <br />
                        <select ref = {this.optRef2} className = "filterSelect" id = "edLevel" onChange = {event => this.generalFilter(event)}>
                            {["","K-12", "Collegiate", "Postgraduate", "Professional"].map(lev => <option value = {lev}>{lev}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "frameworkYear">Year</label>
                        <br />
                        <select ref = {this.optRef3} className = "filterSelect" id = "frameworkYear" onChange = {event => this.generalFilter(event)}>
                            <option value = ""></option>
                            {[" "].concat([...Array(36).keys()]).map(y => <option value = {1998+y}>{1998+y}</option>)}
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