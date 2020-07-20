import React from "react";
import STitle from "./style";
import { colorType, sizesType } from "../../types/types";

interface ITitleProps {
   text: string;
   color?: colorType;
   size?: sizesType;
   underline?: colorType;
   square?: colorType;
}

const Title = (props: ITitleProps) => {
   return (
      <STitle
         underline={props.underline}
         size={props.size}
         color={props.color}
         square={props.square}
      >
         {props.text}
      </STitle>
   );
};

export default Title;
