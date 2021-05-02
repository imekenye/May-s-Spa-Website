import React from "react";
import { FooterContainer } from "./Footer.styled";
import FacebookSvg from "../../../data/footerData/facebook.svg";
import InstaSvg from "../../../data/footerData/instagram.svg";
import TwitterSvg from "../../../data/footerData/twitter.svg";
import TubeSvg from "../../../data/footerData/youtube.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__top">
        <div className="footer__brandSocials">
          <h1>May's Spa & beauty</h1>
          <p>
            May's represents advanced artists in the beauty industry that will
            come to you for fully customized service packages
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com">
              <img src={FacebookSvg} alt="facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img src={InstaSvg} alt="instagram" />
            </a>
            <a href="https://www.twitter.com">
              <img src={TwitterSvg} alt="twitter" />
            </a>
            <a href="https://www.youtube.com">
              <img src={TubeSvg} alt="youtube" />
            </a>
          </div>
        </div>
        <div className="footer__links">
          <h4>Links</h4>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__about">
          <h4>About us</h4>
          <nav>
            <ul>
              <li>
                <a href="">Partners</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__ourOffice">
          <h4>Our Office</h4>
          <div className="addressOne">
            <p>
              Indonesia Jl. Griya Permata Hijau no D1 Purwomartani Kalasan
              543881
            </p>
          </div>
          <div className="addressTwo">
            <p>
              Singapore 35 Mandalay Road 13–37 Mandalay Towers Singapore 308215
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <p> &copy; 2021 May's All Rights Reserved.</p>
        </div>
        <div className="footer__terms">
          <a href="">Privacy</a>
          <a href="">Security</a>
          <a href="">Terms</a>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
