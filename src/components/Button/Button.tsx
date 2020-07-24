import React from "react";
import { SButton, SIcon } from "./style";
import { colorType, sizesType, iconType } from "../../types/types";

interface IButtonProps {
   text: string;
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
   onClick?: (arg: any) => any;
}

const Button = ({ text, color, size, icon, onClick }: IButtonProps) => {
   return (
      <span onClick={onClick}>
         <SButton color={color} size={size} icon={icon}>
            {text}
            {icon && <SIcon icon={icon} />}
         </SButton>
      </span>
   );
};

export default Button;
