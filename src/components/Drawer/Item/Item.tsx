import React, { useState, useEffect } from "react";
import { colorType, iconType } from "../../../types/types";
import { SItem } from "./style";
import onlineTheme from "../../../themes/online";
interface IItemProps {
   label: string;
   color?: colorType;
   icon?: iconType;
}

const Item = ({ label, color = "dark", icon }: IItemProps) => {
   return (
      <>
         <SItem color={color}>
            {icon && <img src={icon} alt="" />}
            {label}
         </SItem>
      </>
   );
};

export default Item;
