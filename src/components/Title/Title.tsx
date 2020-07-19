import React from "react";
import StyledTitle from "./style";
import { colorType, sizesType } from "../../types/types";

interface Props {
   text: string;
   color?: colorType;
   size?: sizesType;
   underline?: colorType;
   square?: colorType;
}

const Title = (props: Props) => {
   return (
      <StyledTitle
         underline={props.underline}
         size={props.size}
         color={props.color}
         square={props.square}
      >
         {props.text}
      </StyledTitle>
   );
};

export default Title;
