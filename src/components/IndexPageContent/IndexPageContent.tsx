import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "sections/Hero/Hero";
import About from "sections/About/About";
import Curriculum from "sections/Curriculum/Curriculum";
import Projects from "sections/Projects/Projects";
import Footer from "sections/Footer/Footer";
import Project_1 from "sections/_singleProjects/Project_1/Project_1";
import Project_2 from "sections/_singleProjects/Project_2/Project_2";
import Project_3 from "sections/_singleProjects/Project_3/Project_3";
import Project_4 from "sections/_singleProjects/Project_4/Project_4";

const IndexPageContent: React.FC = () => {
  return (
    <ReactFullpage
      // debug
      scrollingSpeed={500}
      scrollBar
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Hero />
            <About />
            <Curriculum />
            <Projects />
            <Project_1 />
            <Project_2 />
            <Project_3 />
            <Project_4 />
            <Footer />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default IndexPageContent;
