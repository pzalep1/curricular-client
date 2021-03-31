import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../shared/header/Header.js';
import Footer from '../../shared/footer/Footer.js';
import FrameworkService from '../../service/framework-service.js';

import './FrameworkBuilder.css';

class FrameworkBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frameworkName: "New Framework",
            author: "",
            year: 2021,
            level: "K-12",
        };

        this.handleFrameworkNameChange = this.handleFrameworkNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createYearList = this.createYearList.bind(this);
        this.createLevelList = this.createLevelList.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.createYearList();
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

    handleFrameworkNameChange(e) {
        this.setState(() => ({frameworkName: e.target.value}));
        FrameworkService.createFramework(this.state.frameworkName);
    }

    handleYearChange(e) {
        this.setState(() => ({year: e.target.value}));
    }

    handleLevelChange(e) {
        this.setState(() => ({level: e.target.value}));
    }

    handleSubmit(e) {
        e.preventDefault();
        let copyState = {frameworkName: this.state.frameworkName,author: this.state.author,level: this.state.level,year: this.state.year};
        console.log(copyState);
        FrameworkService.createGuidelines(copyState.guidelines);
        // alert("New framework added");

    }

    render() {
        return [
            <Header />, 
            <main id = "frameworkBuilder">
                <div id = "fTitle">
                    <h1>Create New Framework</h1>
                </div>
                
                <form onSubmit = {this.handleSubmit}>
                    <div id = "nameEditor">
                        <div id = "nameEditorWrapper">   
                            <label htmlFor = "frameworkName" >Framework Name</label><br />
                            <input value = {this.state.frameworkName} onChange = {this.handleFrameworkNameChange} id = "frameworkName" type = "text" /><br /><br />
                            <label htmlFor = "yearSelect" >Year</label>
                            <select value = {this.state.year} onChange = {this.handleYearChange}id = "yearSelect">{this.createYearList()}</select>
                            <label htmlFor = "levelSelect">Level</label>
                            <select value = {this.state.level} onChange = {this.handleLevelChange}id = "levelSelect">{this.createLevelList()}</select><br /><br />
                        </div>
                    </div>
 
                    <div id = "createWrapper">
                        <button id = "createFramework" className = "guidelineButton" type = "submit">Create Framework</button>
                    </div>
                </form>

            </main>
            ,<Footer />
        ]
    }
}



export default FrameworkBuilder;