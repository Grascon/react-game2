import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div className="nav-container">
        <nav className="navbar navbar">
            <span className="navbar-brand" >Soccer Click Game</span>
            <span className="navbar-brand" >Click on Image to Begin</span>
            <span className="navbar-brand" >Score: 0 | Top Score: 0</span>
        </nav>
    </div>
);

export default Navbar;