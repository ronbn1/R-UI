import React from "react";
import { SButton } from "./style";
import { colorType, sizesType, iconType } from "../../types/types";
import Icon from "../Icon/Icon";
interface IButtonProps {
   text: string;
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
   onClick?: (arg: any) => any;
   svg?: string;
}

const Button = ({ text, color, size, icon, onClick, svg }: IButtonProps) => {
   return (
      <span onClick={onClick}>
         <SButton color={color} size={size} icon={icon}>
            <div className="text">{text}</div>

            {icon ? <Icon icon={icon} /> : svg && <Icon svg={svg} />}
         </SButton>
      </span>
   );
};

export default Button;
