import React from "react";
import { HeaderContainer } from "./Header.styled";
import WomanfaceImg from "../../../images/womanface.png";
import IconCheck from "../../../components/SvgIcons/IconCheck";
import {
  Button,
  ButtonOutlined,
} from "../../../components/shared/button/button.stc";

import { motion } from "framer-motion";
import { heroVariants, imgVariants, openVariants } from "./Header.motion";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="eclipse" />
      <div className="hero">
        <motion.div
          className="hero__image"
          variants={imgVariants}
          initial={`hidden`}
          animate={`visible`}
        >
          <img src={WomanfaceImg} alt="" />
        </motion.div>
        <motion.div
          className="hero__text"
          variants={heroVariants}
          initial={`hidden`}
          animate={`visible`}
        >
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
        </motion.div>
        <motion.div
          className="hero__open"
          variants={openVariants}
          initial={`hidden`}
          animate={`visible`}
        >
          <h4>Open Hours:</h4>
          <p>09 am - 6 pm</p>
        </motion.div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
