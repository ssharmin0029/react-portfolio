import React from "react";
import { NavLink } from "react-router-dom";

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
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default NavTabs;
