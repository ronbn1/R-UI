import React from "react";
import { SButton, SIcon } from "./style";
import { colorType, sizesType, iconType } from "../../types/types";

interface IButtonProps {
   text: string;
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
}

const Button = ({ text, color, size, icon }: IButtonProps) => {
   return (
      <SButton color={color} size={size} icon={icon}>
         {text}
         {icon && <SIcon icon={icon} />}
      </SButton>
   );
};

export default Button;
