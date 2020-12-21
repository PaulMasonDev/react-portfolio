import React from "react";
// import InlineSVG from "svg-inline-react";
// import devicons from "./devicons";
import projects from "../PortfolioDetails/project-details";

const PortfolioFilter = ({ passUpProject }) => {
  const handleClick = (e) => {
    passUpProject(e.target.textContent);
  };
  return (
    <div className="PortfolioFilter">
      <h1>My Work</h1>
      <ul className="u-margin-top-small">
        {projects.map((project) => {
          return (
            <li>
              <span className="project-name" onClick={handleClick}>
                {project.name}
              </span>
              {/* <img src={project.image} alt="" /> */}
            </li>
          );
        })}
      </ul>
      {/* <InlineSVG className="PortfolioFilter__devicon" src={devicons.react} /> */}
    </div>
  );
};

export default PortfolioFilter;
