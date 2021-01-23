import React from "react";
import Image from 'react-bootstrap/Image'


function Projects() {
    return (
      <div className="col-6 text-center">
      <div className="card bg-light text-dark text-center">
        <div className="card-body">
          <h4 className="card-title"> Project Title</h4>
          <p className="card-text">Project Description</p>
          <Image src="https://images.unsplash.com/photo-1474065064781-cb296216a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" fluid />
          <a href="github.com">repository link</a>
        </div>
      </div>
    </div>
    );
  }


export default Projects;