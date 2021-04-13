import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <span className="logo"></span>
                <span className="title">Youtube</span>
            </div>
            <span className="toggle"></span>
        </div>
    );
};

export default Navbar;