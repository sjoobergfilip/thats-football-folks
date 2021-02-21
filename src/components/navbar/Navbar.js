import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <p>That's Football Folks!</p>
            </div>
            <ul>
                <li>Player</li>
                <li>About</li>
            </ul>
            <div className="log-in">
                <p>Log In</p>
            </div>
        </nav>
    )
}

export default Navbar
