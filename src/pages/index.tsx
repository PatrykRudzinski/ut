import React, { useEffect, useState } from "react";

import Hero from "sections/Hero/Hero";
import About from "sections/About/About";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import MobileVersionInfo from "../components/MobileVersionInfo/MobileVersionInfo";

const IndexPageContent = React.lazy(
  () => import("components/IndexPageContent/IndexPageContent")
);

const Fallback = () => (
  <>
    <Hero ssr />
    <About />
  </>
);

const MIN_WIDTH = 720;

const IndexPage = () => {
  const isSSR = typeof window === "undefined";
  const [width, setWidth] = useState<number | null>(null);

  const onResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (isSSR) return;
    setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!!width && width < MIN_WIDTH ? (
        <MobileVersionInfo minWidth={MIN_WIDTH} />
      ) : isSSR ? (
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
