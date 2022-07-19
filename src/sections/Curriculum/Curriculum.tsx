import React from "react";
import StyledContainer from "./styled/StyledContainer";
import StyledContentWrapper from "./styled/StyledContentWrapper";
import content from "content/curriculum";
import StyledCurriculumSection from "./styled/StyledCurriculumSection";
import Typography, {
  Props as TypographyProps,
} from "components/Typography/Typography";
import Container from "components/Container/Container";
import CurriculumEntry from "components/CurriculumEntry/CurriculumEntry";

const titleCommonProps: Partial<TypographyProps> = {
  variant: "title",
  fontSize: "subtitle2",
  uppercase: true,
  color: "yellow",
};

const Curriculum: React.FC = () => {
  return (
    <StyledContainer className="section">
      <Container>
        <StyledContentWrapper>
          <div>
            <StyledCurriculumSection>
              <Typography {...titleCommonProps} fontSize="subtitle1">
                {content.education.header}
              </Typography>
              <ul>
                {content.education.content.map((entry, index) => (
                  <CurriculumEntry key={index.toString()} entry={entry} />
                ))}
              </ul>
            </StyledCurriculumSection>
            <StyledCurriculumSection>
              <Typography {...titleCommonProps}>
                {content.knowledge.header}
              </Typography>
              TUTAJ IKONY (SVG)
            </StyledCurriculumSection>
            <StyledCurriculumSection>
              <Typography {...titleCommonProps}>
                {content.skills.header}
              </Typography>
              <ul>
                {content.skills.content.map((entry, index) => (
                  <CurriculumEntry key={index.toString()} entry={entry} />
                ))}
              </ul>
            </StyledCurriculumSection>
          </div>
          <div>
            <StyledCurriculumSection>
              <Typography {...titleCommonProps} fontSize="subtitle1">
                {content.experience.header}
              </Typography>
              <ul>
                {content.experience.content.map((entry, index) => (
                  <CurriculumEntry key={index.toString()} entry={entry} />
                ))}
              </ul>
            </StyledCurriculumSection>
            <StyledCurriculumSection>
              <Typography {...titleCommonProps}>
                {content.interests.header}
              </Typography>
              <ul>
                {content.interests.content.map((entry, index) => (
                  <CurriculumEntry key={index.toString()} entry={entry} />
                ))}
              </ul>
            </StyledCurriculumSection>
          </div>
        </StyledContentWrapper>
      </Container>
    </StyledContainer>
  );
};

export default Curriculum;
