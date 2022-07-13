import React from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const NavLinks = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="header">        
            <nav className="logged-out-nav">
                <div className='app-logo-container'>
                    <a className="app-logo-title" href="#">Finterest</a>
                </div>

                <div className="header-links">
                    <div className="personal-links">
                        <a href="https://www.linkedin.com/in/quang-tran-2926a78b/" target="_blank">Linkedin</a>
                        <a href="https://github.com/kookumber" target="_blank">Github</a>
                        <a href="#">Portfolio</a>
                    </div>
                    {/* Need Routes in order for Link to work */}
                    <div className="login-signup-buttons-container">
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
                    <svg className="search-icon"><SearchRoundedIcon /></svg>
                    <input className="search-bar" type="text" placeholder="Search"/>
                </div>

                <div className="user-links">
                    <div className="notifications">
                        <svg className="user-icons">
                            <NotificationsIcon />
                        </svg>
                    </div>
                    <div className="messages">
                        <svg className="user-icons">
                            <MessageRoundedIcon />
                        </svg>
                    </div>
                    <div className="profile">

                    </div>
                    <button className="logout-button" onClick={logout}>
                        <svg className="user-icons">
                            <LogoutRoundedIcon />
                        </svg>
                    </button>
                </div>

            </nav>
        </div>
    );

    return currentUser ? loaded() : sessionLinks();
}

export default NavLinks