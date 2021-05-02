import React from "react";
import { TreatmentsContainer } from "./Treatments.styled";
import TitleSub from "../../components/shared/TitleSub";
import { treatments } from "../../data/treatments";
import TreatmentCard from "../../components/TreatmentCard";

const Treatments = () => {
  return (
    <TreatmentsContainer>
      <TitleSub small={`best seller`} big={`Our featured beauty treatments`} />
      <div className="treatments">
        {treatments?.map((treatment) => (
          <TreatmentCard>
            <TreatmentCard.Image>
              <img src={treatment.image} alt="" />
            </TreatmentCard.Image>
            <TreatmentCard.Title>{treatment.title}</TreatmentCard.Title>
            <TreatmentCard.Body>{treatment.body}</TreatmentCard.Body>
            <TreatmentCard.Price>{treatment.price}</TreatmentCard.Price>
            <TreatmentCard.Button>Book Now</TreatmentCard.Button>
          </TreatmentCard>
        ))}
      </div>
    </TreatmentsContainer>
  );
};
export default Treatments;
