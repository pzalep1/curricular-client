import React from 'react';
import './styles/Browse.css';
import FrameworkList from './../components/FrameworksList';
import Header from './../components/Header';

class Browse extends React.Component {
    constructor(props) {
        super(props);
        // This needs to be pulled from the backend but for now i'm just putting dummmy data in 
        this.state = {
            frameworks: []
        }
    }   

    handleChange() {
        console.log("method not implemented");
    }

    render() {
        return [
            <Header/>,
            <main className="browse-page">
                <div className ="filter-bar">
                    <h4 className="filter-title">Filters</h4>
                    <div className ="filters">
                    <form id = "filterForm">
                        <label className = "filterLabel" htmlFor = "authorName">Author Name</label>
                        <br />
                        <select className = "filterSelect" id = "authorName">
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => <option value = {letter}>{letter}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "edLevel">Education Level</label>
                        <br />
                        <select className = "filterSelect" id = "edLevel">
                            {["K-12", "Collegiate", "Postgraduate", "Professional"].map(lev => <option value = {lev}>{lev}</option>)}
                        </select>
                        <br />
                        <label className = "filterLabel" htmlFor = "frameworkYear">Year</label>
                        <br />
                        <select className = "filterSelect" id = "frameworkYear">
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
                            onChange={this.handleChange}
                        />
                        <label className="search-icon"><i className="fas fa-search"></i></label>
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