import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledImageWrapper = styled.div<Props>(({ theme, ...props }) => ({
  position: "relative",
  overflow: "hidden",

  "& .about_image": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },
}));

export default StyledImageWrapper;
