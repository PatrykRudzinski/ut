import styled from "styled-components";
import { colorsKeys, fontSizeResponsiveKeys, Theme } from "styles/theme";

export interface Props {
  fontSize?: fontSizeResponsiveKeys;
  margin?: number;
  uppercase?: boolean;
  color?: colorsKeys;
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  variant?: "body" | "title";
  align?: "center" | "right" | "left";
  limitedWidth?: boolean;
  theme: Theme;
}

const resolveVariant = ({ theme, variant, fontWeight }: Props) => {
  switch (variant) {
    case "body":
      return {
        fontFamily: theme.typography.fontBody,
        fontWeight: fontWeight || theme.typography.fontBodyWeight,
        lineHeight: "1.65em",
      };
    case "title":
      return {
        fontFamily: theme.typography.fontTitle,
        letterSpacing: "4px",
        fontWeight: fontWeight || theme.typography.fontTitleWeight,
      };
    default:
      return {
        fontFamily: theme.typography.fontBody,
        fontWeight: fontWeight || theme.typography.fontBodyWeight,
      };
  }
};

const StyledTypography = styled.p<Props>(({ theme, ...props }) => ({
  ...resolveVariant({ theme, ...props }),
  margin: props.margin || "0px",
  textTransform: props.uppercase ? "uppercase" : "none",
  textDecoration: "none",
  color: props.color ? theme.colors[props.color] : theme.colors.text,
  textAlign: props.align || "left",
  maxWidth: props.limitedWidth ? "55ch" : "unset",

  fontSize: `${
    theme.typography.fontSizeResponsive[props.fontSize || "body"][0]
  }px`,

  [theme.down(theme.breakpoints.lg)]: {
    fontSize: `${
      theme.typography.fontSizeResponsive[props.fontSize || "body"][1]
    }px`,
  },

  [theme.down(theme.breakpoints.sm)]: {
    fontSize: `${
      theme.typography.fontSizeResponsive[props.fontSize || "body"][2]
    }px`,
  },
}));

export default StyledTypography;
