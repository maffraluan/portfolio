import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

interface INavbarVerticalProps {
    isOpen?: boolean,
}

const NavbarVertical: React.FC<INavbarVerticalProps> = ({ isOpen }) => {
    const github = 'https://github.com/maffraluan';
    const linkedin = 'https://www.linkedin.com/in/maffraluan/';

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const handleChange = (): void => {
        setIsNavOpen(!isNavOpen);
    };

    const Menu = () => {
        return (
            <nav className="nav-ul">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/techs">Techs</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href={github}>Github</a></li>
                    <li><a href={linkedin}>LinkedIn</a></li>
                    <div className="button-content">
                        <button onClick={handleChange}>Close</button>
                    </div>
                </ul>
            </nav>
        )
    };

    return (
        <>
            <div className="nav-icon" onClick={handleChange} />
            <aside className={`${isNavOpen ? 'navbar-vertical' : ''} aside`}>
                {isNavOpen && <Menu />}
            </aside>
        </>
    )
}

export default NavbarVertical;