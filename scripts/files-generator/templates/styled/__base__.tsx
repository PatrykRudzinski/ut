// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const template = `import styled from "styled-components";
import { Theme } from "styles/theme";

interface Props {
  theme: Theme;
}

const {{ fileName }} = styled.div<Props>(({theme, ...props}) => ({
    border: '1px solid red'
}));

export default {{ fileName }};
`;

module.exports = template;
