import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="preject-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">Our Recent projects</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="single-project-item project-bg-1">
              <div className="project-hover">
                <div className="project-content">
                  <h3>
                    project name <span>client</span>
                  </h3>
                  <a href="shopping" className="view-btn">
                    view
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-project-item project-bg-2">
              <div className="project-hover">
                <div className="project-content">
                  <h3>
                    project name <span>client</span>
                  </h3>
                  <a href="shopping" className="view-btn">
                    view
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-project-item project-bg-3">
              <div className="project-hover">
                <div className="project-content">
                  <h3>
                    project name <span>client</span>
                  </h3>
                  <a href="shopping" className="view-btn">
                    view
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
