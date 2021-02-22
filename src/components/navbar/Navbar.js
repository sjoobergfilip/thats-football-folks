import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link className="links" to="/">
                    That's Football Folks!
                </Link>
            </div>
            <ul>
                <Link className="links" to="/player">
                    Player
                </Link>
                <Link className="links" to="/about">
                    About
                </Link>
            </ul>
            <Link className="links login" to="/login">
                Log In
            </Link>
        </nav>
    );
};

export default Navbar;
