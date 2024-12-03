import React, {useState} from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
    return (
        <div>
        <div className="nav-container">
            <ul className="menu">
                <li><Link to="/" className="home-icon">Hepta</Link></li>
                <li onClick={toggleMenu}><i className="bi bi-list hamburger"></i></li>
            </ul>
        </div>
        <HamburgerMenu isOpen={menuOpen} onClose={closeMenu} />
        </div>
    );
};

export default Navbar;