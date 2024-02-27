import styled, { css } from "styled-components";

const h1Css = css`
  font-size: 3rem;
  font-weight: 600;
`;

const h2Css = css`
  font-size: 2rem;
  font-weight: 600;
`;

const h3Css = css`
  font-size: 2rem;
  font-weight: 500;
`;

const Heading = styled.h1`
  ${(props) => props.as === "h1" && h1Css}
  ${(props) => props.as === "h2" && h2Css}
  ${(props) => props.as === "h3" && h3Css}
  line-height: 1.4;
`;

export default Heading;
