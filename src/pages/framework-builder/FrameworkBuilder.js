import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../shared/header/Header.js';
import Footer from '../../shared/footer/Footer.js';

import './FrameworkBuilder.css';

class FrameworkBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frameworkName: "",
            selectedGL: 0,
            guidelines: [{
                name: "New Guideline 1",
                content: "Insert Content here",
                selected: true
            }]
        };
        this.editorName = React.createRef();
        this.editorText = React.createRef();
    }

    componentDidMount() {

        this.editorName.current.value = "New Guideline 1";
    }


    //Current goals:
    //Get editor name to populate correctly
    //If mid-list guideline is selected, de select on adding new guideline 

    getSelectedGuidelineName() {
        for (let i = 0; i < this.state.guidelines.length; i++) {
            if (this.state.guidelines[i].selected == true) {
                return this.state.guidelines[i].name;
            }
        }
    }

    getSelected(findName) {
        let nameIndex = 0;
        for (let j = 0; j < this.state.guidelines.length; j++) {
            if (this.state.guidelines[j].name == findName) {
                nameIndex = j;
            }
        }  
        return nameIndex;
    }

    //add guideline
    addGuideline() {
        let numGls = this.state.guidelines.length;
        let newGuideline = {name: `New Guideline ${numGls + 1}`, content: "", selected: true};
        //add guideline to state
        this.setState({
            guidelines: this.state.guidelines.concat(newGuideline)
        });
        //make sure the new guideline is selected

        //REWRITE THIS SO YOU DON'T INTERACT WITH THE DOM
        let glList = [...document.getElementById("guidelineList").getElementsByTagName("li")];
        for (let j = 0; j < glList.length; j++) {
            if (j == glList.length -1) {
                glList[j].classList.toggle("selectedGuideline");
                glList[j].classList.toggle("guideline");
            } else {
                
            }
        }
        //QUESTIONABLE
        this.editorName.current.value = this.getSelectedGuidelineName();
    }




    //Toggle currently selected guideline with state 
    selectGuideline(event) {
        if (!event.target.classList.contains("selectedGuideline")) {
            let temp = [...this.state.guidelines];
            temp.forEach(element => {
                element.selected = false;
              });
            this.setState(({guidelines}) => ({guidelines: temp}));
            let stateIndex = this.getSelected(event.target.firstChild.nodeValue);
            let temp2 = [...this.state.guidelines];
            for (let i = 0; i < temp2.length; i++) {
                if (i == stateIndex) {
                    temp2[i].selected = true;
                } else {
                    temp2[i].selected = false;
                }
            }
            this.setState((guidelines) => ({guidelines: temp2}));
            event.target.classList.toggle("selectedGuideline");
            this.setState((selectedGL) => ({selectedGL : stateIndex}));
            //Way to do this without DOM? 
            this.editorName.current.value = temp2[stateIndex].name;
        }
    }


    handleGuidelineNameChange() {

    }

    handleGuidelineChange() {

    }

    render() {

        return [
            <Header />, 
            <main id = "frameworkBuilder">
                <form>
                    <div id = "nameEditor">
                        <div id = "nameEditorWrapper">   
                            <label for = "frameworkName" >Framework Name</label>
                            <input id = "frameworkName" type = "text" />
                        </div>
                    </div>
                    <div id = "guidelineArea">
                        <div className = "guidelines">
                            <ul id = "guidelineList">
                                { 
                                    this.state.guidelines.map(gl => 
                                            <li onClick = {(event) => this.selectGuideline(event)}className = {gl.selected ? "selectedGuideline" : "guideline"}>{gl.name}</li>    
                                    )
                                }
                                
                            </ul>
                            <button type = "button" onClick = {() => this.addGuideline()} className = "guidelineButton" id = "addGuideline">+ Add Guideline</button>
                        </div>
                        <div className = "guidelineEdit">
                                <label className = "glSectionLabel" for = "guidelineName">Guideline Name</label><br />
                                <input ref = {this.editorName} id = "guidelineName" type = "text"/><br /><br />
                                <label className = "glSectionLabel" for = "guidelineContents">Guideline Contents</label><br />
                                <textarea ref = {this.editorText} onChange = {() => this.handleGuidelineChange} id = "guidelineContents" /><br /><br />
                                <button id = "removeGuideline" className = "guidelineButton">Remove </button>
                                <button id = "saveGuideline" className = "guidelineButton">Save</button>                            
                        </div>
                    </div>
                </form>
                <div id = "glSubmitArea">
                        <button id = "submitGuideline" class = "guidelineButton" type = "submit">Submit Guideline</button>
                </div>
            </main>
            ,<Footer />
        ]
    }
}



export default FrameworkBuilder;