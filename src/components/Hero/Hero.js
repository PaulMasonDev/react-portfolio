import React, { useEffect } from "react";
//www.npmjs.com/package/ityped
import { init } from "ityped";
import textStrings from "./ityped-text";

const Hero = () => {
  useEffect(() => {
    const myElement = document.querySelector("#Hero__heading--itype");
    init(myElement, {
      showCursor: true,
      strings: textStrings,
      typeSpeed: 100,
      backspeed: 50,
      backDelay: 500,
    });
  });
  return (
    <div className="Hero u-margin-center">
      <h1 className="Hero__heading">
        Paul Mason . . . &nbsp;<span id="Hero__heading--itype"></span>
      </h1>
      <h1 className="Hero__heading--mobile">Paul Mason</h1>
      <p className="Hero__paragraph u-margin-top-small">
        Passionate web developer and life-long learner with a love for
        developing applications for genuine user needs. With the careful use of
        asynchronous javascript and by creating responsive front-end interfaces,
        I am able to consisely display the most important pieces of information.
      </p>
      <p className="Hero__paragraph u-margin-top-small">
        I have experience building full stack applications with both React and
        Vue on the front end. MongoDB is my back-end of choice. I am always
        looking to learn new technologies and implement creative solutions to
        the problems I encounter. Feel free to look at my portfolio. I've tried
        to make it all fit on one page, because I know your time is valuable.
      </p>
    </div>
  );
};

export default Hero;
