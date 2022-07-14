/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react";
import { GatsbyBrowser } from "gatsby";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/styles/GlobalStyle";
import "./src/styles/reset.css";
import theme from "./src/styles/theme";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
