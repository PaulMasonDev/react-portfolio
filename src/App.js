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
  );
}

export default App;
