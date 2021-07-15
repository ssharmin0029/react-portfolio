import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <nav id="content-contact" className="navbar">
        <div className="container-fluid contact-section ">
          <ul className="contact-list">
            <li className="contact-list-items">
              <a href="mailto:sabrina.sharmin29@myhunter.cuny.edu">
                <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />
              </a>
            </li>
            <li className="contact-list-items">
              <a
                href="https://github.com/ssharmin0029"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </li>
            <li className="contact-list-items">
              <a
                href="https://www.linkedin.com/in/sabrina-sharmin-68171b13a/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
