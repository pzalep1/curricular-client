import React, { useState } from "react";
import './styles/Register.css';
import Logo from './../components/favicon.png';

async function registerUser(credentials) {
    return fetch(process.env.REACT_APP_API_URL+"/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({"user":credentials})
    })
        .then(async res => {
            let response = await res.json();
            if (!response.ok) {
                window.alert(response.message);
            }
        })
}
export default function Register({setUser}) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [organization, setOrganization] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        registerUser({
            email,
            password,
            name,
            organization
        });
        setUser(true);
    }

    function valiateForm() {
        if (email && password && name && organization ) {
            return <button className="button" type="submit">REGISTER</button>
        } else {
            return <button className="button" type="button" disabled>REGISTER</button>
        }
    }

    
    return (
        <div className="registrationPage">
            <img className="logo" src={Logo} alt="Curricular Coffee"/>
            <h1 className="registration-header">REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="input">
                    <legend>Email</legend>
                    <input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="input">
                    <legend>Password</legend>
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />            
                </fieldset>
                <fieldset className="input">
                    <legend>Full Name</legend>
                    <input
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                    />            
                </fieldset>
                <fieldset className="input">
                    <legend>Organization</legend>
                    <input
                        type="text"
                        name="organization"
                        onChange={e => setOrganization(e.target.value)}
                    />            
                </fieldset>
                {valiateForm()}
            </form>
        </div>
    )
}