import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContainer = styled.div<Props>(({ theme }) => ({
  background: theme.colors.background300,
}));

export default StyledContainer;
