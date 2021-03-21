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
            guidelines: [{
                name: "New Guideline 1",
                content: "Insert Content here",
                selected: true
            }]
        }
    }

    componentDidMount() {
        // [...document.getElementById("guidelineList").getElementsByTagName("li")].forEach(gl => gl.addEventListener("click", () => {
        //     document.querySelector(".selectedGuideline").classList.toggle("guideline");
        //     document.querySelector(".selectedGuideline").classList.toggle("selectedGuideline");
        //     gl.classList.toggle("selectedGuideline");
        //     gl.classList.toggle("guideline");

        //     //To do: swap the actual guideline area (guidelineEdit) when changing from guideline to guideline. 
        //     //Make a component (???) for guidelines and have an array of them stored in the FrameworkBuilder state, and change which one 
        //     //displays in this function
        // }));
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
        let glList = [...document.getElementById("guidelineList").getElementsByTagName("li")];
        glList[glList.length - 1].classList.toggle("selectedGuideline");
        glList[glList.length - 1].classList.toggle("guideline");
    }


    //Toggle currently selected guideline with state 
    selectGuideline(event) {
        let temp = this.state.guidelines;
        temp.forEach(element => {
            element.selected = false;
          });
        this.setState(({guidelines}) => ({guidelines: temp}));
        let stateIndex = 0;
        for (let j = 0; j < this.state.guidelines.length; j++) {
            if (this.state.guidelines[j].name == event.target.firstChild.nodeValue) {
                stateIndex = j;
            }
        }
        let temp2 = this.state.guidelines;
        for (let i = 0; i < temp2.length; i++) {
            if (i == stateIndex) {
                temp2[i].selected = true;
            } else {
                temp2[i].selected = false;
            }
        }
        this.setState((guidelines) => ({guidelines: temp2}));
        event.target.classList.toggle("selectedGuideline");
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
                                <input id = "guidelineName" type = "text"/><br /><br />
                                <label className = "glSectionLabel" for = "guidelineContents">Guideline Contents</label><br />
                                <textarea onChange = {() => this.handleGuidelineChange} id = "guidelineContents" /><br /><br />
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