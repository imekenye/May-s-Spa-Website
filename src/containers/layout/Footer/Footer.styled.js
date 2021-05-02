import styled from "styled-components";
import "@fontsource/ubuntu/400.css";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.Dark};
  color: white;
  .footer {
    &__top {
      width: 1140px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 50px;
      padding-top: 44px;

      h1 {
        font-size: 24px;
      }

      p {
        margin-top: 24px;
        line-height: 180%;
      }
    }

    &__bottom {
      display: flex;
      width: 1140px;
      margin: 0 auto;
      justify-content: space-between;
      border-top: 1px solid white;
      padding: 24px 0;
      margin-top: 50px;
    }

    &__socials {
      display: flex;
      margin-top: 32px;
      a {
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
    &__terms {
      display: flex;
      justify-content: space-between;
      a {
        color: white;
        text-decoration: white;
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }

    &__links,
    &__about {
      nav {
        margin-top: 24px;
      }
      ul {
        list-style: none;
        li {
          &:not(:last-child) {
            margin-bottom: 24px;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: 400;
        }
      }
    }
  }
`;
