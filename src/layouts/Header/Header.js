import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="logo-container">
                    <img className="logo" alt="logo" src="logo.png"></img>
                </div>
            </div>
        </nav>
    );
};

export default Header;