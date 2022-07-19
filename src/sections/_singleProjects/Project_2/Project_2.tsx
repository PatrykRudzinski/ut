import React from "react";
import StyledContainer from "./styled/StyledContainer";
import { project_2 } from "content/single_projects";
import ProjectHeader from "components/ProjectHeader/ProjectHeader";

const Project_2: React.FC = () => {
  return (
    <StyledContainer className={"section"}>
      <ProjectHeader
        index={2}
        title={project_2.title}
        content={project_2.content}
      />
    </StyledContainer>
  );
};

export default Project_2;
