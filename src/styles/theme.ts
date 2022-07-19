const breakpoints = {
  xl: 1800,
  lg: 1200,
  md: 800,
  sm: 420,
  xs: 360,
};
type bpKeys = keyof typeof breakpoints;
type bpValues = typeof breakpoints[bpKeys];

const fontSizeResponsive = {
  hero: [114, 96, 82],
  title: [36, 32, 28],
  subtitle1: [26, 22, 20],
  subtitle2: [22, 18, 18],
  body: [18, 16, 16],
};

export type fontSizeResponsiveKeys = keyof typeof fontSizeResponsive;
export type fontSizeResponsiveValues =
  typeof fontSizeResponsive[fontSizeResponsiveKeys];

const colors = {
  // by role
  text: "#333333",
  textInverted: "#FBFBFB",
  background100: "#FFFFFF",
  background200: "#EFEFEF",
  background300: "#F2F0ED",
  background900: "#0F0F0F",
  // by color
  black: "#0F0F0F",
  white: "#FBFBFB",
  purple: "#3F54AC",
  salmon: "#F49580",
  yellow: "#F7BA05",
  cyan: "#3FC5B5",
};

export type colorsKeys = keyof typeof colors;
export type colorsValues = typeof colors[colorsKeys];

export type Theme = {
  breakpoints: typeof breakpoints;
  up: (bp: bpValues) => string;
  down: (bp: bpValues) => string;
  typography: {
    fontTitle: string;
    fontBody: string;
    fontSizeResponsive: typeof fontSizeResponsive;
    fontTitleWeight: 400 | 500 | 600 | 700 | 800 | 900;
    fontBodyWeight: 400 | 500 | 600 | 700 | 800 | 900;
  };
  colors: typeof colors;
  spacing: (...multiple: number[]) => string;
  container: number;
};

const theme: Theme = {
  breakpoints,
  up: (bp) => `@media (min-width: calc(${bp}px + 1px))`,
  down: (bp) => `@media (max-width: ${bp}px)`,
  typography: {
    fontTitle: "'Lato', sans-serif", // todo to update
    fontTitleWeight: 900,
    fontBody: "'Roboto', sans-serif", // todo to update
    fontBodyWeight: 400,
    fontSizeResponsive,
  },
  colors,
  spacing: (...args) => args.map((arg) => `${arg * 8}px`).join(" "),
  container: 1140,
};

export default theme;
