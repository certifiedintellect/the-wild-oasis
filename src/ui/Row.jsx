import styled, { css } from "styled-components";

const cssHorizantalRow = css`
  justify-content: space-between;
  align-items: center;
`;

const cssVerticalRow = css`
  flex-direction: column;
  gap: 1.6rem;
`;

const Row = styled.div`
  display: flex;
  ${(props) => props.type === "horizantal" && cssHorizantalRow}
  ${(props) => props.type === "vertical" && cssVerticalRow}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
