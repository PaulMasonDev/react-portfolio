import React from "react";

import Hero from "./components/Hero/Hero";
import PortfolioFilter from "./components/PortfolioFilter/PortfolioFilter";
import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";
import Contact from "./components/Contact/Contact";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  return (
    // <div className="App">
    //   <div className="Home">
    //     <LeftBar />
    //     <section className="main">
    //       <Hero />
    //       <div className="App__portfolio u-margin-top-small u-margin-center">
    //         <PortfolioFilter />
    //         <PortfolioDetails />
    //       </div>
    //     </section>
    //     <RightBar />
    //   </div>
    //   <Contact />
    // </div>
    <div className="Portfolio">
      <div className="Content">
        <div className="Header">
          <div className="Header__hero">Paul Mason</div>
          <div className="Header__resume">My Resume</div>
        </div>
        <div className="Main">
          <div className="Main__dynamic">
            <div className="Main__dynamic__default">
              <div className="Main__dynamic__default--about-me">
                <p>
                  Passionate web developer and life-long learner with a love for
                  developing applications for genuine user needs. I get excited
                  about creating new applications that tap into the power of
                  public APIs. With the careful use of asynchronous javascript
                  and by creating responsive front-end interfaces, I am able to
                  consisely display the most important pieces of information.
                </p>
                <p>
                  I have experience building full stack applications with both
                  React and Vue on the front end. MongoDB is my back-end of
                  choice. I am always looking to learn new technologies and
                  implement creative solutions to the problems I encounter. Feel
                  free to look at my portfolio below. I've tried to make it all
                  fit on one page, because I know your time is valuable.
                </p>
              </div>
              <div className="Main__dynamic__default--my-skills">My skills</div>
            </div>
            {/* <div className="Main__dynamic__projects">
            <div className="Main__dynamic__projects--details">
              Project Details
            </div>
          </div> */}
          </div>
          <div className="Main__project-selector">Select a project</div>
        </div>
      </div>
      <div className="Footer">FOOTER</div>
    </div>
  );
}

export default App;
