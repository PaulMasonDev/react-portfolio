import React from "react";
import { connect } from "react-redux";
import { setProjectName } from "../../redux/project/project.actions";
// import InlineSVG from "svg-inline-react";
// import devicons from "./devicons";
import projects from "../PortfolioDetails/project-details";

const PortfolioFilter = ({ setProjectName }) => {
  const handleClick = (e) => {
    setProjectName(e.target.textContent);
  };
  return (
    <div className="PortfolioFilter">
      <h1>Personal Project</h1>
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

const mapDispatchToProps = (dispatch) => ({
  setProjectName: (name) => dispatch(setProjectName(name)),
});

export default connect(null, mapDispatchToProps)(PortfolioFilter);
