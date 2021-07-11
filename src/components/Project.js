import React from "react";
import "../assets/css/style.css";

function Project(props) {
  console.log(props);

  return (
    <div className="card project-section text-center">
      <div className="project-image">
        <img
          src={props.screenshot}
          className="card-img-top img-fluid img-thumbnail"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title h4">{props.title}</h4>
        <ul>
          <li>
            <a href={props.githubRepo} className="card-link" target="_blank">
              GitHub Repo
            </a>
          </li>
          <li>
            <a href={props.deployedApp} className="card-link" target="_blank">
              Deployed App/Demo Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
