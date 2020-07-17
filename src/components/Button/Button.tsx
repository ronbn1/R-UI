import React from "react";
import { SButton, Sicon } from "./style";
import { colorType, sizesType, iconType } from "../../types/types";

interface Props {
   text: string;
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
}

const Button = (props: Props) => {
   return (
      <SButton color={props.color} size={props.size} icon={props.icon}>
         {props.text}
         {props.icon && <Sicon className="icon" icon={props.icon} />}
      </SButton>
   );
};

export default Button;
