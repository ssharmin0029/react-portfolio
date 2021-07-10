import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <footer>
            <nav id="content-contact" className="navbar navbar-dark bg-dark">
                <div className="container-fluid contact-section ">
                    <ul className="contact-list">
                        <li>
                            <a href="mailto:sabrina.sharmin29@myhunter.cuny.edu">
                            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ssharmin0029" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sabrina-sharmin-68171b13a/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;