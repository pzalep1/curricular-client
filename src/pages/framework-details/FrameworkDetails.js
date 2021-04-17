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

import './FrameworkDetails.css';

class FrameworkDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            "frameworkName": "New Framework",
            "author": "60660ee951c6bd1b3265c10c",
            "year": "2021",
            "level": "K-12",
            "guidelines": [{
                "id": "",
                "selected": true,
                "name": "New Guideline",
                "content": "Insert Content for Guideline here"
            }, {
                "id": "",
                "selected": false,
                "name": "new guideline 2",
                "content": "content for guideline 2"
            }]
        };
        
 
        this.selectGuideline = this.selectGuideline.bind(this);

    }

    componentDidMount() {
        console.log(this.props.location);
        this.state.guidelines[0].id = Math.random().toString(36).substring(7);
    }

    getSelected(findId) {
        let nameIndex = 0;
        for (let j = 0; j < this.state.guidelines.length; j++) {
            if (this.state.guidelines[j].id == findId) {
                nameIndex = j;
            }
        }  
        return nameIndex;
    }

    selectedInputNumber() {
        for (let i = 0; i < this.state.guidelines.length; i++) {
            if (this.state.guidelines[i].selected == true) {
                return i;
            }
        }
    }

    //Toggle currently selected guideline 
    selectGuideline(event) {
        if (!event.target.classList.contains("selectedGuideline")) {
            let temp = [...this.state.guidelines];
            temp.forEach(element => {element.selected = false;});
            this.setState(({guidelines}) => ({guidelines: temp}));
            let stateIndex = this.getSelected(event.target.id);
            let temp2 = [...this.state.guidelines];
            for(let e=0;e<temp2.length;e++)e==stateIndex?temp2[e].selected=!0:temp2[e].selected=!1;
            this.setState((guidelines) => ({guidelines: temp2}));
            event.target.classList.toggle("selectedGuideline");
        }
    }


    render() {
        return [
            <Header />, 
            <main id = "frameworkBuilder">
                    <div id = "nameEditor">
                        <div id = "nameEditorWrapper">   
                            <span class = "titleLabel">Framework Name</span>
                            <span class = "frameworkTitle">{this.state.frameworkName}</span>
                            <span class = "titleLabel">Year</span>
                            <span class = "frameworkTitle">{this.state.year}</span>
                            <span class = "titleLabel">Level</span>
                            <span class = "frameworkTitle" >{this.state.level}</span>
                        </div>
                    </div>
                    <div id = "guidelineArea">
                        <div className = "guidelines">
                            <ul id = "guidelineList">
                                {this.state.guidelines.map(gl => <li id = {gl.id} onClick = {this.selectGuideline} className = {gl.selected ? "selectedGuideline" : "guideline"}>{gl.name}</li>)} 
                             </ul>
                        </div>
                        <div className = "guidelineEdit">
                                <span className = "glSectionLabel" >Guideline Name</span><br />
                                <span id = "guidelineName">{this.state.guidelines[this.selectedInputNumber()].name}</span><br /><br />
                                <span className = "glSectionLabel" >Guideline Contents</span><br />
                                <span id = "guidelineContents">{this.state.guidelines[this.selectedInputNumber()].content}</span><br /><br />
                        </div>
                    </div>
                    <div id = "glSubmitArea">
                        <Link to="/admindashboard" role="button"><input id = "submitGuideline" className="guidelineButton" type="submit" value="Back to Search Results" /></Link>
                    </div>
            </main>
            ,<Footer />
        ]
    }
}



export default FrameworkDetails;