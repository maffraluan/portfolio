import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Navbar: React.FC = () => {
    const github = 'https://github.com/maffraluan';
    const linkedin = 'https://www.linkedin.com/in/maffraluan/'

    return (
        <nav className="navbar-768">
            <div className="main-nav">
                <div className="nav-links">
                    <Link to="/">
                        Home
            </Link>

                    <Link to="/experience">
                        Experience
            </Link>

                    <Link to="/techs">
                        Techs
            </Link>

                    <Link to="/about">
                        About
            </Link>
                </div>

                <div className="network-links">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>

                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;