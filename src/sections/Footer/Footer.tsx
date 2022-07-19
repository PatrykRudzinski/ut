import React from "react";
import StyledContainer from "./styled/StyledContainer";
import content from "content/footer";
import Typography from "components/Typography/Typography";
import StyledContentWrapper from "./styled/StyledContentWrapper";

const Footer: React.FC = () => {
  return (
    <StyledContainer className="section">
      <StyledContentWrapper>
        <Typography
          align="center"
          color="yellow"
          variant="title"
          fontSize="hero"
          as="h2"
          uppercase
          className="title"
        >
          {content.title}
        </Typography>
        <div className={"footer_subtitle"}>
          <Typography
            align="center"
            color="yellow"
            variant="title"
            fontSize="subtitle1"
            as="a"
            href={`tel:+48${content.phone}`}
          >
            {content.phone}
          </Typography>
          <Typography
            align="center"
            color="yellow"
            variant="title"
            fontSize="subtitle1"
            as="a"
            href={`mailto:${content.mail}`}
          >
            {content.mail}
          </Typography>
        </div>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default Footer;
