import React from "react";
import StyledContainer from "./styled/StyledContainer";
import { project_4 } from "content/single_projects";
import ProjectHeader from "components/ProjectHeader/ProjectHeader";

const Project_4: React.FC = () => {
  return (
    <StyledContainer className="section">
      <ProjectHeader
        index={4}
        title={project_4.title}
        content={project_4.content}
      />
    </StyledContainer>
  );
};

export default Project_4;
