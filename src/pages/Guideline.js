import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Guidelines.css';
class GuidelineBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            "frameworkName": "New Framework Name that is really long just to test css",
            "author": "60660ee951c6bd1b3265c10c",
            "year": "2021",
            "level": "K-12",
            "guidelines": [{
                "id": "",
                "selected": true,
                "name": "New Guideline",
                "content": "Insert Content for Guideline here"
            }]
        };

        this.handleGuidelineNameChange = this.handleGuidelineNameChange.bind(this);
        this.handleGuidelineChange = this.handleGuidelineChange.bind(this);
        this.removeGuideline = this.removeGuideline.bind(this);
        this.selectGuideline = this.selectGuideline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
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

 


    handleSubmit(e) {
        //e.preventDefault();
        //Copy state and remove the guideline id and selected attributes (these are not necessary for the backend)
        let copyState = {frameworkName: this.state.frameworkName,author: this.state.author,level: this.state.level,year: this.state.year,guidelines: this.state.guidelines};
        copyState.guidelines = copyState.guidelines.map(({id, selected, ...rest}) => rest);
        console.log(copyState);
        //FrameworkService.createGuidelines(this.state.guidelines);
        // alert("New framework added");

    }

    render() {
        return [
            <div className="guidelines-wrapper">
                <form onSubmit = {this.handleSubmit}>
                    <div className="guidelines-header-wrapper">
                        <div className="guidelines-header">   
                            <span class = "titleLabel">Framework Name</span>
                            <span class = "frameworkTitle">{this.state.frameworkName}</span>
                            <span class = "titleLabel">Year</span>
                            <span class = "frameworkTitle">{this.state.year}</span>
                            <span class = "titleLabel">Level</span>
                            <span class = "frameworkTitle" >{this.state.level}</span>
                        </div>
                    </div>
                    <div className="guidelineArea">
                        <div className="guidelines">
                            <ul className="guidelineList">
                                {this.state.guidelines.map(gl => <li key = {gl.id} onClick = {this.selectGuideline} className = {gl.selected ? "selectedGuideline" : "notGuideline"}>{gl.name}</li>)} 
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
                    <div className="glSubmitArea">
                        <button className="submitButton"><Link className="submit-guidelineButton" to="/dashboard" onClick={this.handleSubmit}>SUBMIT GUIDELINES</Link></button>
                    </div>
                </form>

            </div>
        ]
    }
}



export default GuidelineBuilder;