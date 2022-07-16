import React from "react";
import content from "content/hero";
import Typography from "components/Typography/Typography";
import StyledContainer from "./styled/StyledContainer";
import StyledContentWrapper from "./styled/StyledContentWrapper";
import ArrowDown from "components/ArrowDown/ArrowDown";

type Props = {
  ssr?: boolean;
};

const Hero: React.FC<Props> = ({ ssr }) => {
  return (
    <StyledContainer className="section" ssr={ssr}>
      {!ssr && (
        <StyledContentWrapper>
          <Typography
            align="center"
            color="purple"
            variant="title"
            fontSize="hero"
            as="h1"
            uppercase
            className="title"
          >
            {content.title}
          </Typography>
          <div className={"hero_subtitle"}>
            <Typography
              align="center"
              color="textInverted"
              variant="title"
              fontSize="subtitle1"
              uppercase
            >
              {content.name}
            </Typography>
            <Typography
              align="center"
              color="purple"
              variant="title"
              fontSize="subtitle2"
            >
              {content.role}
            </Typography>
          </div>
          <ArrowDown className="hero_arrow" size={24} />
        </StyledContentWrapper>
      )}
    </StyledContainer>
  );
};

export default Hero;
