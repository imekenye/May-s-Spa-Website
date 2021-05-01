import React from "react";
import { ServicesContainer } from "./services.stc";
import TitleSub from "../../components/shared/TitleSub";
import titles from "../../data/titles.json";
import ServiceCard from "../../components/ServiceCard";
import Link from "gatsby-link";
import ServicesData from "../../data/services/servicesData";

const Services = () => {
  return (
    <ServicesContainer>
      <TitleSub />
      <div className="services">
        {ServicesData?.map((service, index) => (
          <>
            <ServiceCard key={index}>
              <ServiceCard.Icon>
                <img src={service.icon} alt={service.title} />
              </ServiceCard.Icon>
              <ServiceCard.Title>{service.title}</ServiceCard.Title>
              <ServiceCard.Body>{service.body}</ServiceCard.Body>
              <ServiceCard.Line />
              <ServiceCard.Link>
                <Link href={`/more`}>Read More</Link>
              </ServiceCard.Link>
            </ServiceCard>
          </>
        ))}
      </div>
    </ServicesContainer>
  );
};
export default Services;

TitleSub.defaultProps = {
  align: "center",
  small: titles.services.smallTitle,
  big: titles.services.bigTitle,
  text: titles.services.text,
};
