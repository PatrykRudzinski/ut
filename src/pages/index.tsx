import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "sections/Hero/Hero";
import About from "sections/About/About";
import Curriculum from "sections/Curriculum/Curriculum";
import Projects from "sections/Projects/Projects";
import Footer from "sections/Footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

const IndexPageContent = React.lazy(
  () => import("components/IndexPageContent/IndexPageContent")
);

const Fallback = () => (
  <>
    <Hero ssr />
    <About />
  </>
);

const IndexPage = () => {
  const isSSR = typeof window === "undefined";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isSSR ? (
        <Fallback />
      ) : (
        <React.Suspense fallback={<Fallback />}>
          <IndexPageContent />
        </React.Suspense>
      )}
    </ThemeProvider>
  );
};

export default IndexPage;
