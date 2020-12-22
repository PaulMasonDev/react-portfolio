import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="Contact u-margin-center">
      <div className="Contact__links u-margin-top-small">
        <p>Copyright &copy; 2020 Paul Mason</p>
        <a
          className="Contact__links--li"
          href="https://www.linkedin.com/in/paulmasondev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          className="Contact__links--gh"
          href="https://github.com/PaulMasonDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="Contact__links--mailto"
          href="mailto:webdevpaulmason@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
