import React from "react";

import about from "content/about";

import styled from "styled-components";

const Asd = styled.div`
  background: red;
`;

const IndexPage = () => {
  return <Asd>{about.title}</Asd>;
};

export default IndexPage;
