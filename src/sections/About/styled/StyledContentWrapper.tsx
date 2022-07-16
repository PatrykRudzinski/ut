import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContentWrapper = styled.div<Props>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
  gridGap: theme.spacing(4, 6),

  "& .about_title": {
    gridColumn: "1/3",
    whiteSpace: "pre",
  },
}));

export default StyledContentWrapper;
