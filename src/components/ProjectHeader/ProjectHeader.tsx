import React from "react";
import StyledContentWrapper from "./styled/StyledContentWrapper";
import Typography from "../Typography/Typography";

type Props = {
  index: number;
  title: string;
  content: string[];
};

const ProjectHeader: React.FC<Props> = ({ index, title, content }) => {
  return (
    <StyledContentWrapper>
      <Typography variant="title" uppercase className={"project_header_index"}>
        {index}
      </Typography>
      <Typography variant="title">{title}</Typography>
      <ul>
        {content.map((contentElement) => (
          <Typography as="li" key={contentElement}>
            {contentElement}
          </Typography>
        ))}
      </ul>
    </StyledContentWrapper>
  );
};

export default ProjectHeader;
