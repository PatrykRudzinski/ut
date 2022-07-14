import React from "react";
import StyledSectionBase from "./styled/StyledSectionBase";

type Props = {
  children: React.ReactNode;
};

const SectionBase: React.FC<Props> = ({ children }) => {
  return <StyledSectionBase>{children}</StyledSectionBase>;
};

export default SectionBase;
