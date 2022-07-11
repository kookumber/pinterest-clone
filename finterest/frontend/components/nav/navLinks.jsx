import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="header">        
            <nav className="logged-out-nav">
                <div className='app-logo-container'>
                    <a className="app-logo-title" href="#">Finterest</a>
                </div>

                <div className="header-links">
                    <div></div>
                    {/* Need Routes in order for Link to work */}
                    <div className="login-signup-buttons">
                        <button onClick={() => openModal('login')} className="login-button">Log in</button>
                        <button onClick={() => openModal('signup')} className="signup-button">Sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    );

    const loaded = () => (
        <div className="header">
            <nav className="logged-in-nav">
                <div className="inspiration-links">
                    <div className='app-logo'>
                        <a href="#">F</a>
                    </div>
                    <div className="home-link">

                    </div>
                    <div className="today-link">

                    </div>
                    <div className="create-pin-link">

                    </div>
                </div>

                <div className="search-bar-container">
                    <input className="search-bar" type="text" placeholder="Search"/>
                </div>

                <div className="user-links">
                    <div className="notifications">

                    </div>
                    <div className="messages">

                    </div>
                    <div className="profile">

                    </div>
                    <button className="logout-button" onClick={logout}>Log out</button>
                </div>

            </nav>
        </div>
    );

    return currentUser ? loaded() : sessionLinks();
}

export default NavLinks