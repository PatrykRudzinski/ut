import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const StyledContentWrapper = styled.div<Props>(({ theme, ...props }) => ({
  "& .project_header_index": {},
}));

export default StyledContentWrapper;
