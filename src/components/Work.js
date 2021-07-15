import React, { Component } from "react";
import Project from "./Project";
import projects from "../projects.json";

class Work extends Component {
  state = {
    projects,
  };

  mapProjecs = () =>
    this.state.projects.map((project) => (
      <Project
        key={project.id}
        title={project.title}
        screenshot={project.screenshot}
        githubRepo={project.githubRepo}
        deployedApp={project.deployedApp}
        {...project}
      />
    ));

  render() {
    return (
      <div className="work-section">
        <div className="work-title">
          <h2 className="float-center">Work</h2>
        </div>
        {this.mapProjecs()}
      </div>
    );
  }
}

export default Work;
