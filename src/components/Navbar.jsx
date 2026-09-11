import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className="header">
                <nav className="nav">

                    <div className="logo">
                        <img src="./favicon.svg" alt="" />
                    </div>

                    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaBars />
                    </div>

                </nav>
            </header>
        </div>
    )
}