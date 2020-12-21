import React from "react";
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
          <h3 className="PortfolioDetails--name">{currentProject.name}</h3>
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
          <div className="PortfolioDetails__image-and-links">
            <div className="PortfolioDetails__image-and-links--link">
              <a
                href={currentProject.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live link to {currentProject.name}
              </a>
            </div>
            <div className="PortfolioDetails__image-and-links--gh-link">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>Please select a project</div>
      )}
    </div>
  );
};

export default PortfolioDetails;
