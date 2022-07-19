import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledCurriculumSection = styled.div<Props>(({ theme, ...props }) => ({
  display: "grid",
  gridGap: theme.spacing(3),
  marginBottom: theme.spacing(6),
}));

export default StyledCurriculumSection;
