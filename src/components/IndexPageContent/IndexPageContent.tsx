import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "sections/Hero/Hero";
import About from "sections/About/About";
import Curriculum from "sections/Curriculum/Curriculum";
import Projects from "sections/Projects/Projects";
import Footer from "sections/Footer/Footer";

const IndexPageContent: React.FC = () => {
  return (
    <ReactFullpage
      // debug
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={500}
      scrollBar
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Hero />
            <About />
            <Curriculum />
            <Projects />
            <Footer />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default IndexPageContent;
