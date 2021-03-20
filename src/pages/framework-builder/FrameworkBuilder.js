import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../shared/header/Header.js';
import Footer from '../../shared/footer/Footer.js';

import './FrameworkBuilder.css';

class FrameworkBuilder extends React.Component {

    componentDidMount() {
        [...document.getElementById("guidelineList").getElementsByTagName("li")].forEach(gl => gl.addEventListener("click", () => {
            document.querySelector(".selectedGuideline").classList.toggle("guideline");
            document.querySelector(".selectedGuideline").classList.toggle("selectedGuideline");
            gl.classList.toggle("selectedGuideline");
            gl.classList.toggle("guideline");

            //To do: swap the actual guideline area (guidelineEdit) when changing from guideline to guideline. 
            //Make a component (???) for guidelines and have an array of them stored in the FrameworkBuilder state, and change which one 
            //displays in this function
        }));
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
                                <li className = "selectedGuideline">Guideline 1</li>
                                <li className = "guideline">Guideline 2</li>
                                <li className = "guideline">Guideline 3</li>
                            </ul>
                            <button className = "guidelineButton" id = "addGuideline">+ Add Guideline</button>
                        </div>
                        <div className = "guidelineEdit">
                                <label className = "glSectionLabel" for = "guidelineName">Guideline Name</label><br />
                                <input id = "guidelineName" type = "text"/><br /><br />
                                <label className = "glSectionLabel" for = "guidelineContents">Guideline Contents</label><br />
                                <textarea id = "guidelineContents" /><br /><br />
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