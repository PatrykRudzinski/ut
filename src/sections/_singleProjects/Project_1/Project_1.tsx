import React from "react";
import StyledContainer from "./styled/StyledContainer";
import { project_1 } from "content/single_projects";
import ProjectHeader from "components/ProjectHeader/ProjectHeader";

const Project_1: React.FC = () => {
  return (
    <StyledContainer className="section">
      <ProjectHeader
        index={1}
        title={project_1.title}
        content={project_1.content}
      />
    </StyledContainer>
  );
};

export default Project_1;
