import React, {useState} from 'react';
import './styles/Authentication.css';
import Login from './../pages/Login';
import Register from './../pages/Register';

export default function Authentication({setToken, click}){
    let [user, setUser] = useState(true);

    function handlePage() {
        
        if (user === true) {
            setUser(user = false);
        } else {
            setUser(user = true);
        }
    }

    let page, display;
    if (user) {
        page = <Login className="link" setToken={setToken} click={click}/> 
        display = "Need an account? Register here!"
    } else {
        page = <Register className="link" setUser={setUser}/>
        display = "Already have an account? Login here!"
    }

    return (
        <div>
            {page}
            <button className="login-button" onClick={handlePage}>{display}</button>
        </div>
    )
    

}