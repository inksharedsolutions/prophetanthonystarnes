import React, { useState } from 'react'
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from '../static/logo/logo.png'

const Nav = (props) => {

    const [toggled, setToggled] = useState(false);
    const clickEvent = (e) => {
        setToggled(!toggled);
    }

    return(
        <>
            <nav>
                <div className="wrapper">
                    <Link to="/"><img src={Logo} className="nav-logo" alt="logo"/></Link>
                    <ul>
                        <li><Link to="/contact" className="nav-links">Contact</Link></li>
                        <li><Link to="/about-the-author" className="nav-links">About the Author</Link></li>
                        <li><Link to="/about-the-book" className="nav-links">About the Book</Link></li>
                        <li><Link to="/" className="nav-links">Home</Link></li>
                    </ul>
                    {toggled?
                        <FontAwesomeIcon icon={faTimes} className="menu-bar" size="3x" onClick={clickEvent}/>
                        :<FontAwesomeIcon icon={faBars} className="menu-bar" size="3x" onClick={clickEvent}/>
                    }
                    
                </div>
            </nav>
            <div className={toggled? "toggle-nav": "toggle-nav-hide"}>
                <Link to="/" className="toggle-nav-links">Home</Link>
                <Link to="/about-the-book" className="toggle-nav-links">About the Book</Link>
                <Link to="/about-the-author" className="toggle-nav-links">About the Author</Link>
                <Link to="/contact" className="toggle-nav-links">Contact</Link>
            </div>
        </>
    )
}

export default Nav;