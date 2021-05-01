import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100vh;
  min-height: 600px;
  padding: 28px 150px 0 0;
  background: #ededed;
  overflow: hidden;
  .eclipse {
    position: absolute;
    width: 558px;
    height: 558px;
    left: 79px;
    top: 104px;
    border-radius: 9999999px;

    background: linear-gradient(
      135deg,
      rgba(196, 196, 196, 0.48) 0%,
      rgba(196, 196, 196, 0) 57.99%
    );
  }
  .hero {
    display: flex;
    gap: 30px;
    align-items: center;
    height: 100vh;
    width: 100%;
    &__image {
      img {
        width: 120%;
        object-fit: cover;
      }
    }

    &__text {
      h1 {
        font-size: 56px;
        line-height: 80px;
        color: ${({ theme: { colors } }) => colors.TextColorDark};
      }
    }
    &__top {
      font-size: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${({ theme: { colors } }) => colors.Secondary};
    }
    &__paragraph {
      font-size: 16px;
      line-height: 32px;
      letter-spacing: -0.5px;
      color: ${({ theme: { colors } }) => colors.MediumDark};
    }

    &__checklist {
      margin-top: 25px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__buttons {
      margin-top: 48px;
    }

    &__open {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: absolute;
      width: 155px;
      height: 155px;
      left: 30vw;
      bottom: 1vh;
      border-radius: 99999px;
      background: rgba(255, 255, 255, 0.42);
      backdrop-filter: blur(16px);
      h4 {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: ${({ theme: { colors } }) => colors.Secondary};
      }
      p {
        text-transform: uppercase;
        margin-top: 8px;
      }
    }
  }
`;
