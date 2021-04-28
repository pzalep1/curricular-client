import React from "react";
import './styles/Home.css';
import {Link} from 'react-router-dom';
import Header from'./../components/Header';
import Footer from './../components/Footer';
import settUser from '../components/settUser';
import User from '../components/User';
function handleChange() {
    console.log("handleChange not implemented!")
}

function handleSubmit() {
    console.log("handleSubmit not implemented!")
}

export default function Home() {

    const {user, setUser} = settUser(); 

    // if(!user) {
    //     <User setUser={setUser}/>
    // }

    return [
        <div className="header-wrapper">
            <Header/> 
        </div>,
        <div className="section-wrapper">
            <div className="splash-wrapper">
                <h1>CURRICULAR SEARCHING MADE EASY</h1>
                <form className="search" onSubmit={handleSubmit}>
                    <div className="searchWrapper">
                    <input
                            className="search"
                            placeholder="Search curriculum by organizations or keywords..."
                            onChange={handleChange}
                        />
                        <label className="search-icon"><i className="fas fa-search"></i></label>
                    </div>
                    <div className="search-buttons">
                        <button type="button">
                            <Link className="link" to="/browse">Browse All</Link>
                        </button>
                        <button type="submit" onClick={handleChange}>Search</button>
                    </div>
                </form>
            </div>
        </div>,
        <div className="info-wrapper">
            <h1 className="welcome-title">WELCOME TO CURRICULAR COFFEE!</h1>
            <div className="info-box">
                <p>Curricular Coffee provides educators an easy ability to access, contribute, 
                    and maintain curricular guidelines. Past and more recent guidelines are accessbile
                    via a simple search if you know what you are looking for, or through a more detailed
                    search on the <Link className="info-browse" to="/browse">Browse Page</Link></p>
            </div>
        </div>,
        <div className="footer-wrapper">
            <Footer/>
        </div>
    ]
}