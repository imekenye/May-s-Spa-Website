import React from "react";
import { HeaderContainer } from "./Header.styled";
import WomanfaceImg from "../../../images/womanface.png";
import IconCheck from "../../../components/SvgIcons/IconCheck";
import {
  Button,
  ButtonOutlined,
} from "../../../components/shared/button/button.stc";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="eclipse" />
      <div className="hero">
        <div className="hero__image">
          <img src={WomanfaceImg} alt="" />
        </div>
        <div className="hero__text">
          <p className="hero__top">spa & beauty center</p>
          <h1>Glow Your Face And Vitality With us</h1>
          <p className={`hero__paragraph`}>
            May’s represents advanced artists in the beauty industry that will
            come to you for fully customized service packages.
          </p>
          <p className={`hero__checklist`}>
            <IconCheck />
            Professional Doctor
          </p>
          <p className={`hero__checklist`}>
            <IconCheck />
            Guaranteed Satisfaction
          </p>

          <div className="hero__buttons">
            <Button bgSecondary>Get Started</Button>
            <ButtonOutlined>Book now</ButtonOutlined>
          </div>
        </div>
        <div className="hero__open">
          <h4>Open Hours:</h4>
          <p>09 am - 6 pm</p>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
