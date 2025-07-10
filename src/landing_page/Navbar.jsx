import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import '../styles/navbar.css'
function Nabbar() {
    const [menu, setMenu] = useState('')
    return (
        <nav className="navbar navbar-expand-lg .navbar-expand{-sm|-md|-lg|-xl|-xxl} navbar-light border-bottom p-3 z-1 position-sticky top-0 bg-body-tertiary">
            <div className="container px-5">

                <HashLink className="logo" smooth to="/#">Shreekantha</HashLink>

                <button className="navbar-toggler border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item" onClick={() => { setMenu("home") }} >
                            <HashLink className={menu === "home" ? "home-link":"nav-link"}  smooth to='/#'>HOME</HashLink>
                        </li>
                        <li className="nav-item" onClick={() => { setMenu("about") }}>
                            <HashLink className={menu === "about" ? "home-link" :"nav-link"} smooth to='/#about' >ABOUT</HashLink>
                        </li>
                        <li className="nav-item" onClick={() => { setMenu("skills") }}>
                            <HashLink className= {menu === "skills" ? "home-link" : "nav-link"}  smooth to='/#skills'>SKILLS</HashLink>
                        </li>
                        <li className="nav-item" onClick={() => { setMenu("projects") }}>
                            <HashLink className={menu === "projects" ? "home-link" : "nav-link"} smooth to='/#projects'>PROJECTS</HashLink>
                        </li>
                        <li className="nav-item" onClick={() => { setMenu("contact") }}>
                            <HashLink className={menu === "contact" ? "home-link" : "nav-link"} smooth to='/#contact'>CONTACT</HashLink>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Nabbar;