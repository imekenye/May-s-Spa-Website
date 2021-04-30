import styled from "styled-components";
import "@fontsource/playfair-display/700.css";

export const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 150px;
  background: #ededed;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.TextColorDark};
  h1 {
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
    color: ${({ theme: { colors } }) => colors.TextColorDark};
    font-size: 24px;
  }
  .nav__right {
    display: flex;
    align-items: center;
    gap: 56px;
  }
  ,
  ul {
    display: flex;
    margin: 0;
    li {
      list-style: none;
      &:not(:last-child) {
        margin-right: 56px;
      }
      a {
        text-decoration: none;
        color: ${({ theme: { colors } }) => colors.TextColorDark};
      }
    }
  }
`;
