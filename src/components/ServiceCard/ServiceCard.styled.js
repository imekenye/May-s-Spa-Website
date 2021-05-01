import styled from "styled-components";
import "@fontsource/ubuntu/700.css";

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  height: 412px;
  padding: 32px;
  border: 1px solid ${(props) => props.theme.colors.LightMedium};
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.Dark};
`;
export const Body = styled.p`
  color: ${(props) => props.theme.colors.MediumDark};
  line-height: 32px;
`;
export const Link = styled.div`
  position: relative;
  font-size: 18px;
  color: ${(props) => props.theme.colors.Secondary};

  &:after {
    position: absolute;
    content: "";
    right: 140px;
    bottom: 8px;
    height: 1px;
    background: ${(props) => props.theme.colors.Secondary};
    width: 53px;
    margin-left: 16px;
  }
  a {
    text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.Secondary};
  }
`;
export const Icon = styled.div`
  padding: 16px;
  max-width: 64px;
  max-height: 64px;
  background: #f7f1eb;
  border-radius: 99999px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.LightMedium};
`;
