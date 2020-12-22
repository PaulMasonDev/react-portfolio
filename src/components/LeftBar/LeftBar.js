import React from "react";

import resume from "./Paul_Mason_-_Front_end_Developer.pdf";

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
    </div>
  );
};

export default LeftBar;
