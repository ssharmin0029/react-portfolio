import React from "react";

function About() {
  return (
    <div className="container">
      <div className="info-title">
        <h2 className="float-start">About Me</h2>
      </div>
      <div className="info-section text-center">
        <img
          src="images/sabrina.jpeg"
          className="img-fluid img-thumbnail"
          alt="An image of Sabrina"
        />
      </div>
      <div className="info-section">
        <p className="lead">
          From pursuing a degree in software engineering to now pursuing a
          career as a full-stack developer through Columbia's Bootcamp
          Engineering program is indeed a new experience. Curerntly working on
          projects, so look out for them in this space. Other than that I do
          collaborative work. Anyone interested can reach out to me using my
          contact details.
        </p>
      </div>
    </div>
  );
}

export default About;
