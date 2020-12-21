import React, { useEffect } from "react";
//www.npmjs.com/package/ityped
import { init } from "ityped";
// import textStrings from "./ityped-text";

const Hero = () => {
  useEffect(() => {
    const myElement = document.querySelector("#Hero__heading--itype");
    init(myElement, {
      showCursor: true,
      strings: [
        "Web Developer",
        "Web Designer",
        "React Addict",
        "MongoDB Lover",
        "Agile Worker",
        "API Afficionado",
        "Bug Squasher",
        "Video Game Connoisseur",
        "If you are still reading this",
        "You have the patience of a",
        "saint.",
        "See you waited for that one",
        "Can I hire you as a babysitter?",
        "You would make an amazing teacher!",
        "Or maybe a professional paint-dry watcher?",
        "The choice is yours",
        "Don't say I never gave you anything",
        "That advice I laid down doesn't come cheap!",
      ],
      typeSpeed: 100,
      backspeed: 50,
      backDelay: 500,
    });
  });
  return (
    <div className="Hero u-margin-center u-margin-top-small">
      <h1 className="Hero__heading">
        Paul Mason . . . &nbsp;<span id="Hero__heading--itype"></span>
      </h1>
      <p className="Hero__paragraph u-margin-top-small">
        Passionate web developer and life-long learner with a love for
        developing applications for genuine user needs. I get excited about
        creating new applications that tap into the power of public APIs. With
        the careful use of asynchronous javascript and by creating responsive
        front-end interfaces, I am able to display the most important pieces of
        information for the client's needs.
      </p>
      <p className="Hero__paragraph u-margin-top-small">
        I have experience building full stack applications with both React and
        Vue on the front end. MongoDB is my back-end of choice. I am always
        looking to learn new technologies and implement creative solutions to
        the problems I encounter. Feel free to look at my portfolio below. I've
        tried to make it all fit on one page, because I know your time is
        valuable.
      </p>
    </div>
  );
};

export default Hero;
