import React from "react";
import StyledContainer from "./styled/StyledContainer";
import { project_3 } from "content/single_projects";
import ProjectHeader from "components/ProjectHeader/ProjectHeader";

const Project_3: React.FC = () => {
  return (
    <StyledContainer className="section">
      <ProjectHeader
        index={3}
        title={project_3.title}
        content={project_3.content}
      />
    </StyledContainer>
  );
};

export default Project_3;
