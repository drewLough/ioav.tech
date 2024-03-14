import React from "react";
import styled from "styled-components";

const TestStyle = styled.div`
  margin: 0em;
  padding: 0em;
  background: #ff0000;
`;

export const Test: React.FC = () => {
  return <TestStyle>mic check...</TestStyle>;
};
