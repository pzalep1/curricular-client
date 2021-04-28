import React, { useState } from "react";
import PropTypes from 'prop-types';
import Logo from './../components/favicon.png'
import './styles/Login.css';

async function loginUser(credentials) {
    return fetch(process.env.REACT_APP_API_URL+"/users/tokens", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({"user":credentials})
    })
        .then(res => res.json())
}
export default function Login({ setToken }) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    var handleSubmit = async event => {
        event.preventDefault();
        var access_token = await loginUser({
            email,
            password
        });
        setToken(access_token)
    }

    function valiateForm() {
        if (email && password ) {
            return <button className="button" type="submit">LOGIN</button>
        } else {
            return <button className="button" type="button" disabled>LOGIN</button>
        }
    }

    
    return (
        <div className="loginPage">
            <img className="logo" src={Logo} alt="Curricular Coffee"/>
            <h1 className="login-header">LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="input">
                    <legend>Email</legend>
                    <input
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="input">
                    <legend>Password</legend>
                    <input
                        type="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                    />            
                </fieldset>
                {valiateForm()}
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}