// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const template = `import React from 'react';

import styled from "styled-components";

const {{ fileName }} = styled.div\`;
    border: 1px solid red;
\`;

export default {{ fileName }};
`;

module.exports = template;
