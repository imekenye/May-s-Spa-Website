import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.Secondary};
  margin-right: 24px;
  margin-right: ${(props) => props.mr};
  padding: 16px 32px;
  color: ${(props) => props.theme.colors.White};
`;

export const ButtonOutlined = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.Secondary};
  background: none;
  color: ${(props) => props.theme.colors.TextColorDark};
`;
