import React from "react";
import devicons from "./devicons";
import InlineSVG from "svg-inline-react";
const RightBar = () => {
  return (
    <div className="RightBar">
      <h1>Skills/Tech</h1>
      <ul>
        <li>HTML/CSS/JavaScript</li>
        <li>SCSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Vue</li>
        <li>AJAX</li>

        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>

        <li>Agile and Scrum</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>Netlify</li>
      </ul>
      <div className="Rightbar__devicons">
        {devicons.map((devicon) => {
          return (
            <InlineSVG className="Rightbar__devicons--icon" src={devicon.svg} />
          );
        })}
      </div>
    </div>
  );
};

export default RightBar;
