import React from "react";
import {
  Container,
  Title,
  Body,
  Button,
  Image,
  Price,
} from "./TreatmentCard.styled.js";

export default function TreatmentCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TreatmentCard.Image = function TreatmentCardImage({ children, ...restProps }) {
  return <Image {...restProps}> {children} </Image>;
};

TreatmentCard.Title = function TreatmentCardTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

TreatmentCard.Body = function TreatmentCardBody({ children, ...restProps }) {
  return <Body {...restProps}> {children} </Body>;
};

TreatmentCard.Price = function TreatmentCardPrice({ children, ...restProps }) {
  return <Price {...restProps}> {children} </Price>;
};

TreatmentCard.Button = function TreatmentCardButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}> {children} </Button>;
};
