import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContentWrapper = styled.div<Props>(({ theme }) => ({
  position: "relative",
  bottom: "0",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& .hero_subtitle": {
    bottom: "20%",
    position: "absolute",
    display: "grid",
    gridGap: theme.spacing(2),
  },

  "& .hero_arrow": {
    position: "absolute",
    bottom: theme.spacing(1),
  },
}));

export default StyledContentWrapper;
