import styled from "styled-components";
import "@fontsource/playfair-display/600.css";
import "@fontsource/ubuntu/700.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 626px;
`;
export const Image = styled.div`
  height: 360px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-family: "Playfair Display";
  font-weight: 600;
  color: ${(props) => props.theme.colors.Dark};
`;
export const Body = styled.p`
  text-align: center;
  padding: 0 20%;
  color: ${(props) => props.theme.colors.MediumDark};
`;
export const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.Dark};
`;
export const Button = styled.button`
  background: transparent;
  width: 150px;
  padding: 16px 32px;
  border: 1px solid ${(props) => props.theme.colors.Dark};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.Secondary};
    color: white;
    border: none;
  }
`;
