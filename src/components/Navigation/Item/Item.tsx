import React, { useState } from "react";
import { SItem, SLabel, SIcon } from "./style";
import Icon from "../../Icon/Icon";
import { iconType } from "../../../types/types";
import { Colors, Sizes } from "../../../enums/";
interface Props {
   label: string;
   icon?: iconType;
   iconSize?: Sizes;
   active?: boolean;
   svg?: string;
}
const Item = ({ label, icon, iconSize, active = false, svg }: Props) => {
   return (
      <>
         <SItem active={active}>
            <div className="selectedLine" />
            {icon ? (
               <Icon color={Colors.LIGHT} icon={icon} iconSize={iconSize} />
            ) : (
               <Icon color={Colors.LIGHT} svg={svg} iconSize={iconSize} />
            )}

            <SLabel>{label}</SLabel>
         </SItem>
      </>
   );
};

export default Item;
