import React from "react";
import STitle from "./style";
import { colorType, sizesType } from "../../types/types";

interface ITitleProps {
   text: string;
   color?: colorType;
   size?: sizesType;
   underline?: colorType;
   square?: colorType;
   align?: string;
   style?: any;
}

const Title = (props: ITitleProps) => {
   return (
      <STitle
         underline={props.underline}
         size={props.size}
         color={props.color}
         square={props.square}
         align={props.align}
         style={{ ...props.style }}
      >
         {props.text}
      </STitle>
   );
};

export default Title;
