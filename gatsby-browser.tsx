/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react";
import { GatsbyBrowser } from "gatsby";

import GlobalStyle from "./src/styles/GlobalStyle";
import "./src/styles/reset.css";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
