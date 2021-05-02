import React from "react";
import {
  Container,
  SmallTitle,
  BigTitle,
  Body,
  Button,
} from "./SectionDetails.styled.js";

export default function SectionDetails({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SectionDetails.SmallTitle = function SectionDetailsSmallTitle({
  children,
  ...restProps
}) {
  return <SmallTitle {...restProps}> {children} </SmallTitle>;
};

SectionDetails.BigTitle = function SectionDetailsBigTitle({
  children,
  ...restProps
}) {
  return <BigTitle {...restProps}> {children} </BigTitle>;
};

SectionDetails.Body = function SectionDetailsBody({ children, ...restProps }) {
  return <Body {...restProps}> {children} </Body>;
};

SectionDetails.Button = function SectionDetailsButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}> {children} </Button>;
};
