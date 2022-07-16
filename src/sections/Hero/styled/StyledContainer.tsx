import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
  ssr?: boolean;
}

const StyledContainer = styled.div<Props>(({ theme, ...props }) => ({
  minHeight: props.ssr ? "100vh" : "unset",
  background: theme.colors.salmon,
  height: "100vh",
  position: "relative",
}));

export default StyledContainer;
