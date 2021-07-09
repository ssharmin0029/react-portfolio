import React from 'react';
import {NavLink} from 'react-router-dom';

function NavTabs() {
    return (
        <nav className="navbar navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded">
            <div className="container-fluid"> 

            <h1 class="h4 text-muted">Sabrina Sharmin</h1>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="nav-link active"
                            className="nav-link"
                        >
                            About
                        </NavLink>
                        {/* <a href="#content-about">About</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/work"
                            activeClassName="nav-link active"
                            className="nav-link"
                        >
                            Work
                        </NavLink>
                        {/* <a href="#content-work">Work</a>  */}
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="nav-link active"
                            className="nav-link"
                        >
                            Contact
                        </NavLink>
                        {/* <a href="#content-contact">Contact</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/resume"
                            activeClassName="nav-link active"
                            className="nav-link"
                        >
                            Resume
                        </NavLink>
                        {/* <a href="">Resume</a> */}
                    </li>
                </ul>
            </nav>

            </div>

        </nav>
    );
}

export default NavTabs;