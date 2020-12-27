import React from "react";

import Hero from "./components/Hero/Hero";
import PortfolioFilter from "./components/PortfolioFilter/PortfolioFilter";
import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";
import Contact from "./components/Contact/Contact";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  return (
    <div className="App">
      <div className="Home">
        <LeftBar />
        <section className="main">
          <Hero />
          <div className="App__portfolio u-margin-top-small u-margin-center">
            <PortfolioFilter />
            <PortfolioDetails />
          </div>
        </section>
        <RightBar />
      </div>
      <Contact />
    </div>
    // <div className="Portfolio">
    //   <div className="Content">
    //     <div className="Header">
    //       <div className="Header__hero">
    //         <h1>Paul Mason</h1>
    //         <h3>The Choice Is Yours</h3>
    //       </div>
    //       <div className="Header__resume">
    //         <span>IMAGE HERE</span>
    //         <h2>My Resume</h2>
    //       </div>
    //     </div>
    //     <div className="Main">
    //       <div className="Main__dynamic">
    //         <div className="Main__dynamic__default">
    //           <div className="Main__dynamic__default--about-me">
    //             <Hero />
    //           </div>
    //           <div className="Main__dynamic__default--my-skills">My skills</div>
    //         </div>
    //         {/* <div className="Main__dynamic__projects">
    //         <div className="Main__dynamic__projects--details">
    //           Project Details
    //         </div>
    //       </div> */}
    //       </div>
    //       <div className="Main__project-selector">Select a project</div>
    //     </div>
    //   </div>
    //   <div className="Footer">FOOTER</div>
    // </div>
  );
}

export default App;
