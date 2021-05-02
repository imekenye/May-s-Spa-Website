import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;
  height: 100%;
`;
export const Image = styled.div`
  grid-column: ${(props) => props.colstart} / ${(props) => props.colend};
  grid-row: ${(props) => props.rowstart} / ${(props) => props.rowend};
  background: lightblue;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
