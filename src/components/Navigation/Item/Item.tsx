import React, { useState } from "react";
import { SItem, SLabel, SIcon } from "./style";
import { iconType } from "../../../types/types";
import { Colors, Sizes } from "../../../enums/";
interface Props {
   label: string;
   icon?: iconType;
   iconSize?: Sizes;
   active?: boolean;
}
const Item = ({ label, icon, iconSize, active = false }: Props) => {
   return (
      <>
         <SItem active={active}>
            <div className="selectedLine" />
            <SIcon color={Colors.LIGHT} icon={icon} size={iconSize} />
            <SLabel>{label}</SLabel>
         </SItem>
      </>
   );
};

export default Item;
