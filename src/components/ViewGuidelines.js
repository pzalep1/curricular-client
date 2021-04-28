import React from 'react';
import {Link} from 'react-router-dom';
import './styles/GuidelinesList.css';

export default class ViewGuidelines extends React.Component {

    constructor(props) {
        super(props);
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
        }
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
            <div className="guidelinesList-wrapper">
                <div className="guidelinesList-header-wrapper">
                    <div className="guidelinesList-header">   
                        <span className= "titleLabel">Framework Name</span>
                        <span className= "frameworkTitle">{this.state.frameworkName}</span><br/>
                        <span className= "titleLabel">Year</span>
                        <span className= "frameworkTitle">{this.state.year}</span>
                        <span className= "titleLabel">Level</span>
                        <span className= "frameworkTitle" >{this.state.level}</span>
                    </div>
                </div>
                <div className="guidelineArea">
                    <div className="guidelines">
                        <ul className="guidelineList">
                            {this.state.guidelines.map(gl => <li id = {gl.id} onClick = {this.selectGuideline} className = {gl.selected ? "selectedGuideline" : "notGuideline"}>{gl.name}</li>)} 
                            </ul>
                    </div>
                    <div className = "guidelineEdit">
                            <span className = "glSectionLabel" >Guideline Name</span><br />
                            <span id = "guidelineName">{this.state.guidelines[this.selectedInputNumber()].name}</span><br /><br />
                            <span className = "glSectionLabel" >Guideline Contents</span><br />
                            <span id = "guidelineContents">{this.state.guidelines[this.selectedInputNumber()].content}</span><br /><br />
                    </div>
                </div>
            </div>
        ]
    }

}