import React from "react";
import { BenefitsContainer } from "./Benefits.styled";
import SectionDetails from "../../components/shared/SectionDetails";
import ImageGrid from "../../components/shared/ImageGrid";
import BenefitsImageOne from "../../data/benefitsData/imageOne.png";
import BenefitsImageTwo from "../../data/benefitsData/imageTwo.png";
import BenefitsImageThree from "../../data/benefitsData/imageThree.png";

const Benefits = () => {
  return (
    <BenefitsContainer>
      <SectionDetails>
        <SectionDetails.SmallTitle>the benefits</SectionDetails.SmallTitle>
        <SectionDetails.BigTitle>
          Beauty is about being happy with your skin
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
      <ImageGrid>
        <ImageGrid.Image colstart={1} colend={3} rowstart={1} rowend={2}>
          <img src={BenefitsImageOne} alt="" />
        </ImageGrid.Image>
        <ImageGrid.Image colstart={1} colend={2} rowstart={2} rowend={3}>
          <img src={BenefitsImageTwo} alt="" />
        </ImageGrid.Image>
        <ImageGrid.Image colstart={2} colend={3} rowstart={2} rowend={3}>
          <img src={BenefitsImageThree} alt="" />
        </ImageGrid.Image>
      </ImageGrid>
    </BenefitsContainer>
  );
};
export default Benefits;
