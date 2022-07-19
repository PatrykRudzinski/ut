import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContentWrapper = styled.div<Props>(({ theme }) => ({
  height: "100%",
  display: "grid",
  gridGap: theme.spacing(2),
  justifyItems: "center",
  overflow: "hidden",

  "& .projects_title": {
    alignSelf: "center",
  },
  "& .projects_arrow": {
    alignSelf: "flex-start",
  },
  "& .projects_deco_text": {
    fontSize: "16vw",
    letterSpacing: "2vw",
    alignSelf: "flex-end",
    justifySelf: "flex-start",
    lineHeight: "70%",
    marginLeft: "-1.25vw",
  },
}));

export default StyledContentWrapper;
