import React from "react";

import {
  Container,
  Title,
  Icon,
  Body,
  Link,
  Line,
} from "./ServiceCard.styled.js";

export default function ServiceCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ServiceCard.Icon = function ServiceCardIcon({ children, ...restProps }) {
  return <Icon {...restProps}> {children} </Icon>;
};

ServiceCard.Title = function ServiceCardTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

ServiceCard.Body = function ServiceCardText({ children, ...restProps }) {
  return <Body {...restProps}> {children} </Body>;
};

ServiceCard.Link = function ServiceCardLink({ children, ...restProps }) {
  return <Link {...restProps}> {children} </Link>;
};
ServiceCard.Line = function ServiceCardLine({ children, ...restProps }) {
  return <Line {...restProps} />;
};

ServiceCard.defaultProps = {
  title: "Body Massage",
  body:
    "Practice of rubbing and kneading the body using the hands. During a massage, a massage therapist will apply gentle or strong pressure to the muscles and.",
};
