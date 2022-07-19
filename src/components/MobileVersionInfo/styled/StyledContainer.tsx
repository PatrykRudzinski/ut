import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContainer = styled.div<Props>(({ theme }) => ({
  minHeight: "100%",
  margin: "0 auto",
  display: "grid",
  gridGap: theme.spacing(4),
  alignContent: "center",
  justifyItems: "center",
  padding: theme.spacing(5, 2),
  maxWidth: "60ch",

  "& .mobile_version_info": {
    lineHeight: "1.45em",
  },
}));

export default StyledContainer;
