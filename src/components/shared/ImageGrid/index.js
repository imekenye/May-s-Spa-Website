import React from "react";
import { Container, Image } from "./ImageGrid.styled.js";

export default function ImageGrid({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ImageGrid.Image = function ImageGridImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
