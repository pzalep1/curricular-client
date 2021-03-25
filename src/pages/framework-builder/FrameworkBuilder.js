import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../shared/header/Header.js';
import Footer from '../../shared/footer/Footer.js';

import './FrameworkBuilder.css';

class FrameworkBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frameworkName: "New Framework",
            guidelines: [{
                id: "",
                name: "New Guideline 1",
                content: "Insert Content for Guideline 1 here",
                selected: true
            }]
        };

        this.handleFrameworkNameChange = this.handleFrameworkNameChange.bind(this);
        this.handleGuidelineNameChange = this.handleGuidelineNameChange.bind(this);
        this.handleGuidelineChange = this.handleGuidelineChange.bind(this);
        this.removeGuideline = this.removeGuideline.bind(this);
        this.selectGuideline = this.selectGuideline.bind(this);


    }

    componentDidMount() {
        this.state.guidelines[0].id = Math.random().toString(36).substring(7);
    }

    getSelected(findName) {
        let nameIndex = 0;
        for (let j = 0; j < this.state.guidelines.length; j++) {
            if (this.state.guidelines[j].id == findName) {
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

    //add guideline
    addGuideline() {
        let numGls = this.state.guidelines.length;
        let newGuideline = {id: `${Math.random().toString(36).substring(7)}`,name: `New Guideline ${numGls + 1}`, content: `Insert Content for Guideline ${numGls + 1} Here`, selected: true};
        //add guideline to state
        let temp = [...this.state.guidelines].map(item => {item.selected = false}).concat(newGuideline);
        this.setState({
            guidelines: this.state.guidelines.concat(newGuideline)
        }, () => {});
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
        this.setState((guidelines) => ({guidelines: temp}));
    }

    handleFrameworkNameChange(e) {
        let newFname = e.target.value;
        this.setState((frameworkName) => ({frameworkName: newFname}));
    }

    render() {

        return [
            <Header />, 
            <main id = "frameworkBuilder">
                <form>
                    <div id = "nameEditor">
                        <div id = "nameEditorWrapper">   
                            <label htmlFor = "frameworkName" >Framework Name</label>
                            <input value = {this.state.frameworkName} onChange = {this.handleFrameworkNameChange} id = "frameworkName" type = "text" />
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
                                {/* <button id = "saveGuideline" className = "guidelineButton">Save</button>                             */}
                        </div>
                    </div>
                </form>
                <div id = "glSubmitArea">
                        <button id = "submitGuideline" className = "guidelineButton" type = "submit">Submit Framework</button>
                </div>
            </main>
            ,<Footer />
        ]
    }
}



export default FrameworkBuilder;