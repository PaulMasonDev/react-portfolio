import React from "react";

import resume from "./Paul_Mason-Resume.pdf";
import profile from "./aboutMe1.jpg";

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <h1>Resume Download</h1>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <img
          className="LeftBar--img"
          src="https://live.staticflickr.com/65535/50744906546_0bd2b85d76_m.jpg"
          alt="Resume"
        />
      </a>
      <img className="LeftBar--profile" src={profile} alt="Profile" />
    </div>
  );
};

export default LeftBar;
