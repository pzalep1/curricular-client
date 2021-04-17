import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Header from '../../shared/header/Header.js';
import Footer from '../../shared/footer/Footer.js';
import './Dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // This needs to be pulled from the backend but for now i'm just putting dummmy data in 
        this.state = {
            frameworks: [
            {
                "frameworkName": "New Framework",
                "author": "60660ee951c6bd1b3265c10c",
                "year": "2021",
                "level": "K-12",
                "guidelines": [{
                    "name": "New Guideline",
                    "content": "Insert Content for Guideline here"
                }, {
                    "name": "new guideline 2",
                    "content": "content for guideline 2"
                }]
            },
            {
                "frameworkName": "New Framework 2",
                "author": "60660ee951c6bd1b3265c10j",
                "year": "2021",
                "level": "Professional",
                "guidelines": [{
                    "name": "New Guideline",
                    "content": "Insert Content for Guideline here"
                }, {
                    "name": "new guideline 2",
                    "content": "content for guideline 2"
                }]
            }]
        }
    }   



    render() {
        return [
            <Header />,
            <main id = "adminDashboard">
                <div className ="fTitle">
                    <h2>Filters</h2>
                </div>
                <div className ="filters">
                    <form id = "filterForm">
                        <label className = "filterLabel" htmlFor = "frameworkName">Framework Name</label>
                        <br />
                        <select className = "filterSelect" id = "frameworkName">
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => <option value = {letter}>{letter}</option>)}
                        </select>
                        <br />
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
                    </form>

                </div>
                <div className ="bar">
                    <form id = "searchBarForm">
                        <label htmlFor="searchBar">Search: </label>
                        <input id = "searchBar" type = "text" />
                        <button id = "searchButton" type = "submit" value = "">🔍</button>
                        <select id = "filterBar">
                            <option>Year</option>
                            <option>Author</option>
                            <option>Level</option>
                            <option>Length</option>
                        </select>
                    </form>
        
                </div>
                <div className ="results">
                    <table id = "resultsTable">
                        <thead>
                            <tr className = "tableHeader">
                                <td>Name</td>
                                <td>Author</td>
                                <td>Year</td>
                                <td>Level </td>
                                <td style = {{color: "#FFF"}}></td>
                            </tr>
                        </thead>
                        <tbody> 
                            {this.state.frameworks.map((f, i) => 
                                <tr className = "resultsRow">
                                    <td>{f.frameworkName}</td>
                                    <td>{f.author}</td>
                                    <td>{f.year}</td>
                                    <td>{f.level}</td>
                                    <td><Link className = "viewLink" to = {{
                                        pathname: "/admindashboard/frameworkdetails",
                                        state: {
                                            frameworkName: f.frameworkName,
                                            author: f.author,
                                            year: f.year,
                                            level: f.level,
                                            guidellines: f.guidelines
                                        }
                                        }}
                                     role = "button" >View</Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </main>,
            <Footer />
        ]
    }

}


export default Dashboard;