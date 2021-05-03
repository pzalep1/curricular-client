import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Guidelines.css';
class GuidelineBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            _id: this.props.match.params.frameworkId,
            frameworkName: "",
            author: "",
            year: "",
            level: [],
            "guideline": [{
                "id": `${Math.random().toString(36).substring(7)}`,
                "selected": true,
                "name": "New Guideline",
                "guidelineText": "Insert Content for Guideline here"
            }],
        };

        this.handleGuidelineNameChange = this.handleGuidelineNameChange.bind(this);
        this.handleGuidelineChange = this.handleGuidelineChange.bind(this);
        this.removeGuideline = this.removeGuideline.bind(this);
        this.selectGuideline = this.selectGuideline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({guideline: [{
            "id": `${Math.random().toString(36).substring(7)}`,
            "selected": true,
            "name": "New Guideline",
            "guidelineText": "Insert Content for Guideline here"
        }]});
        this.getFramework();
    }

    async getFramework() {
        let framework = await this.retrieveFramework(this.state._id);
        this.setState({frameworkName: framework.name});
        this.setState({author: framework.author});
        this.setState({year: framework.year});
        this.setState({level: framework.levels});
    }

    async retrieveFramework(frameworkId) {
        return fetch(process.env.REACT_APP_API_URL+'/frameworks/'+frameworkId, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
    }

    getSelected(findId) {
        let nameIndex = 0;
        for (let j = 0; j < this.state.guideline.length; j++) {
            if (this.state.guideline[j].id === findId) {
                nameIndex = j;
            }
        }  
        return nameIndex;
    }

    selectedInputNumber() {
        for (let i = 0; i < this.state.guideline.length; i++) {
            if (this.state.guideline[i].selected === true) {
                return i;
            }
        }
    }


    //add guideline
    addGuideline() {
        let newGuideline = {id: `${Math.random().toString(36).substring(7)}`,name: `New Guideline`, guidelineText: `Insert Content for Guideline Here`, selected: true};
        //Create dummy state with new guideline, then add to current state
        [...this.state.guideline].map(item => {item.selected = false}).concat(newGuideline);
        this.setState({guideline: this.state.guideline.concat(newGuideline)}, () => {});    
    }


    //Toggle currently selected guideline 
    selectGuideline(event) {
        if (!event.target.classList.contains("selectedGuideline")) {
            let temp = [...this.state.guideline];
            temp.forEach(element => {element.selected = false;});
            this.setState(({guideline}) => ({guideline: temp}));
            let stateIndex = this.getSelected(event.target.id);
            let temp2 = [...this.state.guideline];
            for(let e=0;e<temp2.length;e++)e===stateIndex?temp2[e].selected=!0:temp2[e].selected=!1;
            this.setState((guideline) => ({guideline: temp2}));
            event.target.classList.toggle("selectedGuideline");
        }
    }

    removeGuideline() {
        if (this.state.guideline.length > 1) {
            //Case 1: removing first guideline -> move to second guideline
            if (this.selectedInputNumber() === 0) {
                let temp = [...this.state.guideline];
                temp[1].selected = true;
                temp.shift();
                this.setState((guideline) => ({guideline: temp}));    
            //Case 2: removing last guideline -> move to second last guideline
            } else if (this.selectedInputNumber() === this.state.guideline.length - 1) {
                let temp = [...this.state.guideline];
                temp[this.state.guideline.length - 2].selected = true;
                temp.pop();
                this.setState((guideline) => ({guideline: temp}));
            //Case 3: removing middle guideline -> move to previous guideline
            } else {
                let temp = [...this.state.guideline];
                temp[this.selectedInputNumber() - 1].selected = true;
                temp.splice(this.selectedInputNumber() + 1, 1);
                this.setState((guideline) => ({guideline: temp}));
            }
        } else {
            console.log("cant remove the last guideline");
        }
    }


    handleGuidelineNameChange(e) {
        let newName = e.target.value;
        let temp = [...this.state.guideline];
        temp[this.selectedInputNumber()].name = newName;
        this.setState((guideline) => ({guideline: temp}));
    }

    handleGuidelineChange(e) {
        let newContent = e.target.value;
        let temp = [...this.state.guideline];
        temp[this.selectedInputNumber()].guidelineText = newContent;
        this.setState(() => ({guideline: temp}));
    }

 
    async createGuidelines(guideline) {
        console.log(JSON.stringify({guideline}));
        return fetch(process.env.REACT_APP_API_URL+'/frameworks/'+(this.state._id)+'/guidelines', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"guideline":guideline.guideline})
        })
            .then(res => res.json())
            .then(data => data.response)
    }

    handleSubmit(e) {
        //e.preventDefault();
        //Copy state and remove the guideline id and selected attributes (these are not necessary for the backend)
        let copyState = {guideline: this.state.guideline};
        copyState.guideline = copyState.guideline.map(({id, selected, ...rest}) => rest);
        copyState.guideline.map(guideline => {
            this.createGuidelines({
                guideline
            })
        })

    }

    render() {
        return [
            <div className="guidelines-wrapper">
                <form onSubmit = {this.handleSubmit}>
                    <div className="guidelines-header-wrapper">
                        <div className="guidelines-header">   
                            <span className= "titleLabel">Framework Name</span>
                            <span className= "frameworkTitle">{this.state.frameworkName}</span>
                            <span className= "titleLabel">Year</span>
                            <span className= "frameworkTitle">{this.state.year}</span>
                            <span className= "titleLabel">Level</span>
                            <span className= "frameworkTitle" >{this.state.level}</span>
                        </div>
                    </div>
                    <div className="guidelineArea">
                        <div className="guidelines">
                            <ul className="guidelineList">
                                {this.state.guideline.map(gl => <li key = {gl.id} id={gl.id} onClick = {this.selectGuideline} className = {gl.selected ? "selectedGuideline" : "notGuideline"}>{gl.name}</li>)} 
                             </ul>
                            <button type = "button" onClick = {() => this.addGuideline()} className = "guidelineButton" id = "addGuideline">+ Add Guideline</button>
                        </div>
                        <div className = "guidelineEdit">
                                <label className = "glSectionLabel" htmlFor = "guidelineName">Guideline Name</label><br />
                                <input value = {this.state.guideline[this.selectedInputNumber()].name} onChange = {this.handleGuidelineNameChange} id = "guidelineName" type = "text"/><br /><br />
                                <label className = "glSectionLabel" htmlFor = "guidelineContents">Guideline Contents</label><br />
                                <textarea value = {this.state.guideline[this.selectedInputNumber()].guidelineText} onChange = {this.handleGuidelineChange} id = "guidelineContents" /><br /><br />
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