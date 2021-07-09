import React from 'react';
// import { Link, Route } from 'react-router-dom';

function Contact() {
    return (
        <div id="content-contact">
            <aside className="side-label-section">
                <h2 className="side-label-text">Contact</h2>
            </aside>
            <div className="contact-section">
                <ul>
                    <li>
                        <a href="mailto:sabrina.sharmin29@myhunter.cuny.edu">Email</a>
                    </li>
                    <li>
                        <a href="https://github.com/ssharmin0029" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sabrina-sharmin-68171b13a/" target="_blank">Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
