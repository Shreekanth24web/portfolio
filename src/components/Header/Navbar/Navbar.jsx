import { useState } from 'react';
import '../../../styles/navbar.css'
import Logo from '../Logo'
import { HashLink } from "react-router-hash-link";
function Navbar() {
    const [menu, setMenu] = useState('')
    return (
        <div className="navbar">

            <div className='logo-container'>
                <HashLink to='/#'>
                    <Logo />
                </HashLink>

            </div>
            <nav className="nav">
                <li onClick={() => { setMenu("home") }}>
                    <HashLink className={menu === "home" ? "home-link" : "navlink"} smooth to='/#'>HOME</HashLink>
                </li>
                <li onClick={() => { setMenu("about") }}>
                    <HashLink className={menu === "about" ? "home-link" : "navlink"} smooth to='/#about' >ABOUT</HashLink>
                </li>
                <li onClick={() => { setMenu("skills") }}>
                    <HashLink className={menu === "skills" ? "home-link" : "navlink"} smooth to='/#skills'>SKILLS</HashLink>
                </li>
                <li onClick={() => { setMenu("projects") }}>
                    <HashLink className={menu === "projects" ? "home-link" : "navlink "} smooth to='/#projects'>PROJECTS</HashLink>
                </li>
                <li onClick={() => { setMenu("contact") }}>
                    <HashLink className={menu === "contact" ? "home-link" : "navlink"} smooth to='/#contact'>CONTACT</HashLink>
                </li>
            </nav>

        </div>
    );
}

export default Navbar;