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
            guidelines: [{
                id: "",
                selected: true,
                name: "New Guideline",
                content: "Insert Content for Guideline here"
            }]
        };

        this.handleFrameworkNameChange = this.handleFrameworkNameChange.bind(this);
        this.handleGuidelineNameChange = this.handleGuidelineNameChange.bind(this);
        this.handleGuidelineChange = this.handleGuidelineChange.bind(this);
        this.removeGuideline = this.removeGuideline.bind(this);
        this.selectGuideline = this.selectGuideline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createYearList = this.createYearList.bind(this);
        this.createLevelList = this.createLevelList.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.state.guidelines[0].id = Math.random().toString(36).substring(7);
        this.createYearList();
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

    //add guideline
    addGuideline() {
        let newGuideline = {id: `${Math.random().toString(36).substring(7)}`,name: `New Guideline`, content: `Insert Content for Guideline Here`, selected: true};
        //Create dummy state with new guideline, then add to current state
        let temp = [...this.state.guidelines].map(item => {item.selected = false}).concat(newGuideline);
        this.setState({guidelines: this.state.guidelines.concat(newGuideline)}, () => {});    
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

    removeGuideline() {
        if (this.state.guidelines.length > 1) {
            //Case 1: removing first guideline -> move to second guideline
            if (this.selectedInputNumber() == 0) {
                let temp = [...this.state.guidelines];
                temp[1].selected = true;
                temp.shift();
                this.setState((guidelines) => ({guidelines: temp}));    
            //Case 2: removing last guideline -> move to second last guideline
            } else if (this.selectedInputNumber() == this.state.guidelines.length - 1) {
                let temp = [...this.state.guidelines];
                temp[this.state.guidelines.length - 2].selected = true;
                temp.pop();
                this.setState((guidelines) => ({guidelines: temp}));
            //Case 3: removing middle guideline -> move to previous guideline
            } else {
                let temp = [...this.state.guidelines];
                temp[this.selectedInputNumber() - 1].selected = true;
                temp.splice(this.selectedInputNumber() + 1, 1);
                console.log(temp);
                this.setState((guidelines) => ({guidelines: temp}));
            }
        } else {
            console.log("cant remove the last guideline");
        }
    }


    handleGuidelineNameChange(e) {
        let newName = e.target.value;
        let temp = [...this.state.guidelines];
        temp[this.selectedInputNumber()].name = newName;
        this.setState((guidelines) => ({guidelines: temp}));
    }

    handleGuidelineChange(e) {
        let newContent = e.target.value;
        let temp = [...this.state.guidelines];
        temp[this.selectedInputNumber()].content = newContent;
        this.setState(() => ({guidelines: temp}));
    }

    handleFrameworkNameChange(e) {
        this.setState(() => ({frameworkName: e.target.value}));
    }

    handleYearChange(e) {
        this.setState(() => ({year: e.target.value}));
    }

    handleLevelChange(e) {
        this.setState(() => ({level: e.target.value}));
    }

    handleSubmit(e) {
        e.preventDefault();
        //Copy state and remove the guideline id and selected attributes (these are not necessary for the backend)
        let copyState = {frameworkName: this.state.frameworkName,author: this.state.author,level: this.state.level,year: this.state.year,guidelines: this.state.guidelines};
        copyState.guidelines = copyState.guidelines.map(({id, selected, ...rest}) => rest);
        console.log(copyState);
        FrameworkService.register(copyState);
        // alert("New framework added");

    }

    render() {
        return [
            <Header />, 
            <main id = "frameworkBuilder">
                <form onSubmit = {this.handleSubmit}>
                    <div id = "nameEditor">
                        <div id = "nameEditorWrapper">   
                            <label htmlFor = "frameworkName" >Framework Name</label>
                            <input value = {this.state.frameworkName} onChange = {this.handleFrameworkNameChange} id = "frameworkName" type = "text" />
                            <label htmlFor = "yearSelect" >Year</label>
                            <select value = {this.state.year} onChange = {this.handleYearChange}id = "yearSelect">{this.createYearList()}</select>
                            <label htmlFor = "levelSelect">Level</label>
                            <select value = {this.state.level} onChange = {this.handleLevelChange}id = "levelSelect">{this.createLevelList()}</select>
                        </div>
                    </div>
                    <div id = "guidelineArea">
                        <div className = "guidelines">
                            <ul id = "guidelineList">
                                {this.state.guidelines.map(gl => <li id = {gl.id} onClick = {this.selectGuideline} className = {gl.selected ? "selectedGuideline" : "guideline"}>{gl.name}</li>)} 
                             </ul>
                            <button type = "button" onClick = {() => this.addGuideline()} className = "guidelineButton" id = "addGuideline">+ Add Guideline</button>
                        </div>
                        <div className = "guidelineEdit">
                                <label className = "glSectionLabel" htmlFor = "guidelineName">Guideline Name</label><br />
                                <input value = {this.state.guidelines[this.selectedInputNumber()].name} onChange = {this.handleGuidelineNameChange} id = "guidelineName" type = "text"/><br /><br />
                                <label className = "glSectionLabel" htmlFor = "guidelineContents">Guideline Contents</label><br />
                                <textarea value = {this.state.guidelines[this.selectedInputNumber()].content} onChange = {this.handleGuidelineChange} id = "guidelineContents" /><br /><br />
                                <button type = "button" onClick = {this.removeGuideline} id = "removeGuideline" className = "guidelineButton">Remove</button>
                        </div>
                    </div>
                    <div id = "glSubmitArea">
                        <button id = "submitGuideline" className = "guidelineButton" type = "submit">Submit Framework</button>
                    </div>
                </form>

            </main>
            ,<Footer />
        ]
    }
}



export default FrameworkBuilder;