import React from "react";
import StyledContainer from "./styled/StyledContainer";
import Typography from "components/Typography/Typography";
import content from "content/projects";
import ArrowDown from "components/ArrowDown/ArrowDown";
import StyledContentWrapper from "./styled/StyledContentWrapper";

const Projects: React.FC = () => {
  return (
    <StyledContainer className="section">
      <StyledContentWrapper>
        <Typography
          variant="title"
          fontSize="hero"
          uppercase
          color="textInverted"
          className={"projects_title"}
        >
          {content.title}
        </Typography>
        <ArrowDown size={128} className={"projects_arrow"} />
        <Typography
          variant="title"
          fontSize="hero"
          uppercase
          color="black"
          className="projects_deco_text"
        >
          {content.title}
        </Typography>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default Projects;
