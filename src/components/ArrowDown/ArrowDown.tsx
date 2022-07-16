import React from "react";
import styled from "styled-components";
import { Theme } from "styles/theme";

type Props = {
  size: number;
  className?: string;
};

type StyledProps = {
  theme: Theme;
  size: number;
};

const StyledButton = styled.button<StyledProps>(({ theme, ...props }) => ({
  cursor: "pointer",
  background: "none",
  width: 0,
  height: 0,
  border: "none",
  padding: "0",
  borderLeft: `${props.size}px solid transparent`,
  borderRight: `${props.size}px solid transparent`,
  borderTop: `${props.size}px solid ${theme.colors.white}`,
}));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const onClick = () => window.fullpage_api.moveSectionDown();

const ArrowDown: React.FC<Props> = ({ size, className }) => {
  return <StyledButton size={size} onClick={onClick} className={className} />;
};

export default ArrowDown;
