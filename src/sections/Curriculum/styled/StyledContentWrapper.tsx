import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContentWrapper = styled.div<Props>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: theme.spacing(8),
}));

export default StyledContentWrapper;
