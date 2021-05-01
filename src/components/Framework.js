import React, {useState}from "react";
import { Redirect}  from 'react-router-dom';
import './styles/Framework.css';

async function createFramework(framework) {
    console.log(framework);
    return fetch(process.env.REACT_APP_API_URL+"/frameworks", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({'framework':framework})
    })
    .then(res => res.json())
}

function createYearList() {
    let vals = [];
    [...Array(36).keys()].map((y) => vals.push(<option value = {1998+y}>{1998+y}</option>));
    return vals;
}

function createLevelList() {
    let vals = [];
    ["K12", "Collegiate", "Postgraduate", "Professional"].map(o => vals.push(<option value = {o}>{o}</option>));
    return vals;
}

export default function Framework() {

    let [name, handleName] = useState();
    let [author, handleAuthor] = useState();
    let [year, handleYear] = useState();
    let [levels, handleLevel] = useState();
    let [url, setURL] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        url = await createFramework({
            name,
            year,
            levels,
            author
        });
        setURL(url);
    }

    if (url) {
        return <Redirect to={'framework/'+url+'/guidelines'}/>
    }

    return (
        <div className="framework-wrapper">
            <div className="framework-title-wrapper">
                <h1 className="framework-title">Create New Framework</h1>
            </div>
            <form>
                <div className="create-framework-wrapper"> 
                    <form>
                        <div className="name-wrapper">
                            <legend id="create-framework-legend">Framework Name</legend>
                            <input className="framework-name-input" value = {name} type="text" onChange={e => handleName(e.target.value)}/>
                            <legend id="create-framework-legend">Contributing Organization</legend>
                            <input className="framework-name-input" value = {author} type="text" onChange={e => handleAuthor(e.target.value)}/>
                        </div>
                        <div className="select-wrapper">
                            <legend id="create-framework-legend">Year</legend>
                            <select className="selectInput" value = {year} onChange = {e => handleYear(e.target.value)}id = "yearSelect">{createYearList()}</select>
                            <legend id="create-framework-legend">Level</legend>
                            <select className="selectInput" onChange = {e => handleLevel(e.target.value)}id = "levelSelect">{createLevelList()}</select>
                        </div>
                        <div className="create-button-wrapper">
                            <button className="create-framework-button" onClick={handleSubmit}>CREATE FRAMEWORK</button>
                        </div>
                    </form>
                </div>
            </form>
        </div>
    )
}