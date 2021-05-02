import React from "react";
import ImageGrid from "../../components/shared/ImageGrid";
import { AboutUsContainer } from "./AboutUs.styled";
import AbtImageOne from "../../data/aboutUsData/imageOne.png";
import AbtImageTwo from "../../data/aboutUsData/imageTwo.png";
import AbtImageThree from "../../data/aboutUsData/imageThree.png";
import SectionDetails from "../../components/shared/SectionDetails";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <ImageGrid>
        <ImageGrid.Image colstart={1} colend={2} rowstart={1} rowend={3}>
          <img src={AbtImageOne} alt="" />
        </ImageGrid.Image>
        <ImageGrid.Image colstart={2} colend={3} rowstart={1} rowend={2}>
          <img src={AbtImageTwo} alt="" />
        </ImageGrid.Image>
        <ImageGrid.Image colstart={2} colend={3} rowstart={2} rowend={3}>
          <img src={AbtImageThree} alt="" />
        </ImageGrid.Image>
      </ImageGrid>
      <SectionDetails>
        <SectionDetails.SmallTitle>About us</SectionDetails.SmallTitle>
        <SectionDetails.BigTitle>
          About May's Esthetics and Hannah Clinic
        </SectionDetails.BigTitle>
        <SectionDetails.Body>
          Custom Beauty is a gorgeous 2,000 square-foot facility serving clients
          in Western New York. We have seven private treatment rooms and a
          hand-picked staff of experts ready to provide you with excellent
          service. Our technicians utilize proven techniques, use quality
          products and provide solutions for most skin conditions.
        </SectionDetails.Body>
        <SectionDetails.Button>Read More</SectionDetails.Button>
      </SectionDetails>
    </AboutUsContainer>
  );
};
export default AboutUs;
