import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContentWrapper = styled.div<Props>(({ theme, ...props }) => ({
  position: "relative",
  bottom: "0",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "pre",

  "& .footer_subtitle": {
    bottom: "20%",
    position: "absolute",
    display: "grid",
    gridGap: theme.spacing(2),
  },
}));

export default StyledContentWrapper;
