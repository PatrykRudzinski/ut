import React from "react";
import Typography from "components/Typography/Typography";
import StyledContainer from "./styled/StyledContainer";

type Props = {
  minWidth: number;
};

const MobileVersionInfo: React.FC<Props> = ({ minWidth }) => {
  return (
    <StyledContainer>
      <Typography
        className="mobile_version_info"
        variant="title"
        fontSize="title"
        uppercase
        align="center"
      >
        Wersja mobilna nie jest dostępna
      </Typography>
      <Typography
        className="mobile_version_info"
        variant="title"
        fontSize="subtitle1"
        uppercase
        align="center"
      >
        Otwórz link na urządzeniu o szerokości ekranu większej niż {minWidth}px
      </Typography>
    </StyledContainer>
  );
};

export default MobileVersionInfo;
