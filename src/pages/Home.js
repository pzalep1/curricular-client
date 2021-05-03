import React from "react";
import './styles/Home.css';
import {Link} from 'react-router-dom';
import Header from'./../components/Header';
import Footer from './../components/Footer';

function handleChange() {
    console.log("handleChange not implemented!")
}

function handleSubmit() {
    console.log("handleSubmit not implemented!")
}

export default function Home() {

    return [
        <div className="header-wrapper" key="header">
            <Header/> 
        </div>,
        <div className="section-wrapper" key="homePage">
            <div className="splash-wrapper">
                <h1>CURRICULAR SEARCHING MADE EASY</h1>
                <form className="search" onSubmit={handleSubmit}>
                    <div className="search-buttons">
                        <button type="button">
                            <Link className="link" to="/browse">Browse All</Link>
                        </button>
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
        <div className="footer-wrapper" key="footer">
            <Footer/>
        </div>
    ]
}