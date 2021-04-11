import React from "react";
import "./Navbar.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const { currentUser } = useAuth();

    return (
        <nav className="navbar">
            <div className="logo">
                <Link className="links" to="/">
                    <img className="img-logo" alt="logo" src={Logo} />
                </Link>
            </div>
            <ul>
                <Link className="links" to="/players">
                    Players
                </Link>
                <Link className="links" to="/become-a-scout">
                    Become a Scout
                </Link>
                <Link className="links" to="/about">
                    About
                </Link>
            </ul>
            {currentUser ? (
                <Link className="links login" to="/dashboard">
                    {currentUser.email}
                </Link>
            ) : (
                <Link className="links login" to="/login">
                    Log In
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
