import React, { useState } from "react";

import Hero from "./components/Hero/Hero";
import PortfolioFilter from "./components/PortfolioFilter/PortfolioFilter";
import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";
import Contact from "./components/Contact/Contact";

function App() {
  const [currentProjectName, setCurrentProjectName] = useState("");
  const passUpProject = (project) => {
    console.log("PASSED", project);
    setCurrentProjectName(project);
  };
  return (
    <div className="App">
      <section className="main">
        <Hero />
        <div className="App__portfolio u-margin-top-small u-margin-center">
          <PortfolioFilter passUpProject={passUpProject} />
          <PortfolioDetails currentProjectName={currentProjectName} />
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default App;
