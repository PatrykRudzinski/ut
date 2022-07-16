import React from "react";
import StyledContainer from "./styled/StyledContainer";
import StyledContentWrapper from "./styled/StyledContentWrapper";
import Container from "components/Container/Container";

import content from "content/about";
import Typography from "components/Typography/Typography";
import { StaticImage } from "gatsby-plugin-image";
import StyledImageWrapper from "./styled/StyledImageWrapper";

const About: React.FC = () => {
  return (
    <StyledContainer className="section">
      <Container>
        <StyledContentWrapper>
          <Typography
            uppercase
            className="about_title"
            color="textInverted"
            variant="title"
            fontSize="hero"
          >
            {content.title}
          </Typography>
          <StyledImageWrapper>
            <StaticImage
              className="about_image"
              placeholder="tracedSVG"
              src="../../images/about/main.jpg"
              alt="Autor"
            />
          </StyledImageWrapper>
          <div>
            <Typography
              limitedWidth
              color="text"
              variant="body"
              dangerouslySetInnerHTML={{ __html: content.description }}
            />
          </div>
        </StyledContentWrapper>
      </Container>
    </StyledContainer>
  );
};

export default About;
