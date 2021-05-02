import styled from "styled-components";
import "@fontsource/ubuntu/300.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 56px 0;
`;
export const SmallTitle = styled.h6`
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.Secondary};
`;
export const BigTitle = styled.h1`
  font-size: 40px;
  line-height: 60px;
  color: ${(props) => props.theme.colors.Dark};
  margin-top: 24px;
`;
export const Body = styled.p`
  line-height: 28.8px;
  color: ${(props) => props.theme.colors.MediumDark};
  margin-top: 24px;
`;
export const Button = styled.button`
  position: relative;
  font-size: 12px;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.Dark};
  text-transform: uppercase;
  margin-top: 48px;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    right: -120px;
    bottom: 8px;
    width: 100px;
    height: 1px;
    background: ${(props) => props.theme.colors.MediumDark};
  }
`;
