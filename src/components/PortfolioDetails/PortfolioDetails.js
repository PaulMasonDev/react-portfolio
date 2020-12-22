import React from "react";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import projects from "./project-details";

const PortfolioDetails = ({ currentProjectName }) => {
  const currentProject = projects.find(
    ({ name }) => name === currentProjectName
  );
  console.log("GENERATED", currentProject);
  return (
    <div className="PortfolioDetails">
      <h1>Project Details</h1>
      {currentProject ? (
        <div>
          <h3 className="PortfolioDetails--name u-margin-top-small">
            {currentProject.name}
          </h3>
          <div className="PortfolioDetails__project-info">
            <div className="PortfolioDetails__project-info--description">
              {currentProject.description}
            </div>
            <img
              className="PortfolioDetails__project-info--image"
              src={currentProject.image}
              alt={currentProject.name}
            />
          </div>
          <div className="PortfolioDetails__links u-margin-top-small">
            <div className="PortfolioDetails__links--link">
              <a
                href={currentProject.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>
            <div className="PortfolioDetails__links--gh-link u-margin-top-small">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Please select a project to the left</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentProjectName: state.projects.currentProjectName,
});

export default connect(mapStateToProps)(PortfolioDetails);
