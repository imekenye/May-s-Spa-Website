import React from "react";
import {
  TitleBig,
  TitleSmall,
  TitleSubContainer,
  TitleText,
} from "./TitleSub.styled";

const TitleSub = ({ small, big, text, ...props }) => {
  return (
    <TitleSubContainer {...props}>
      <TitleSmall>{small}</TitleSmall>

      <TitleBig>{big}</TitleBig>
      <TitleText>{text}</TitleText>
    </TitleSubContainer>
  );
};
export default TitleSub;

// TitleSub.defaultProps = {
//   align: "center",
//   small: "small title",
//   big: "Big title",
//   text:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam amet deleniti dicta, dolor dolorem eius eos eum fugit id ipsam magnam nam optio perferendis quam quia quos reprehenderit repudiandae suscipit tenetur ullam voluptate voluptates voluptatibus? Accusamus amet delectus et eum hic inventore iusto labore possimus provident, sequi temporibus totam!",
// };
