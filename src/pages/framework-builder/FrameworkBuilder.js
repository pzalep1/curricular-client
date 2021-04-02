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
import FrameworkService from '../../service/framework-service.js';
import AuthService from '../../service/auth-service';

import './FrameworkBuilder.css';

class FrameworkBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            "name": "New Framework",
            "author": "60660ee951c6bd1b3265c10c",
            "year": "2021",
            "levels": ["Collegiate"]
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createYearList = this.createYearList.bind(this);
        this.createLevelList = this.createLevelList.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.createYearList();
        //this.setState(() => ({author: AuthService.getUser()}))
    }

    createYearList() {
        let vals = [];
        [...Array(36).keys()].map((y) => vals.push(<option value = {1995+y}>{1995+y}</option>));
        return vals;
    }

    createLevelList() {
        let vals = [];
        ["K-12", "Collegiate", "Postgraduate", "Professional"].map(o => vals.push(<option value = {o}>{o}</option>));
        return vals;
    }

    handleNameChange(e) {
        this.setState(() => ({name: e.target.value}));
    }

    handleYearChange(e) {
        this.setState(() => ({year: e.target.value}));
    }

    handleLevelChange(e) {
        this.setState(() => ({level: e.target.value}));
    }

    handleSubmit(e) {
        //e.preventDefault();
        let copyState = {name: this.state.name,author: this.state.author,levels: this.state.levels,year: this.state.year};
        console.log(copyState);
        FrameworkService.createFramework(this.state);
        // alert("New framework added");

    }

    render() {
        return [
            <Header />, 
            <main id = "frameworkBuilder">
                <div id = "fTitle">
                    <h1>Create New Framework</h1>
                </div>
                
                <form>
                    <div id = "nameEditor">
                        <div id = "nameEditorWrapper">   
                            <label htmlFor = "frameworkName" >Framework Name</label><br />
                            <input value = {this.state.name} onChange = {this.handleNameChange} id = "frameworkName" type = "text" /><br /><br />
                            <label htmlFor = "yearSelect" >Year</label>
                            <select value = {this.state.year} onChange = {this.handleYearChange}id = "yearSelect">{this.createYearList()}</select>
                            <label htmlFor = "levelSelect">Level</label>
                            <select value = {this.state.levels} onChange = {this.handleLevelChange}id = "levelSelect">{this.createLevelList()}</select><br /><br />
                        </div>
                    </div>
 
                    <div id = "createWrapper">
                        <Link to="/frameworkbuilder/guidelines" role="button"><input id = "regButton" type="submit" value="Create Guidelines" onClick={this.handleSubmit}/></Link>
                    </div>
                </form>

            </main>
            ,<Footer />
        ]
    }
}

export default FrameworkBuilder;