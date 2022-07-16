import React from "react";
import styled from "styled-components";
import { Theme } from "styles/theme";

type Props = {
  theme: Theme;
};

const StyledContainer = styled.div<Props>(({ theme }) => ({
  width: "100%",
  maxWidth: `calc(${theme.container}px + ${theme.spacing(8)})`,
  padding: theme.spacing(0, 4),
  margin: "0 auto",
}));

export default StyledContainer;
