import styled from "styled-components";

export const TitleSubContainer = styled.div`
  text-align: ${(props) => props.align};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TitleSmall = styled.h6`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.Secondary};
`;
export const TitleBig = styled.h2`
  font-family: Playfair Display;
  width: 400px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.5px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.TextColorDark};
`;
export const TitleText = styled.p`
  font-size: 16px;
  line-height: 180%;
  width: 412px;
  color: ${(props) => props.theme.colors.MediumDark};
  margin: 0 auto;
`;
