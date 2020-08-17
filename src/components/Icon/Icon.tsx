import React, { useState } from "react";
import { SIcon } from "./style";
import { iconType } from "../../types/types";
import { Colors, Sizes } from "../../enums/";
interface Props {
   icon?: iconType;
   iconSize?: Sizes;
   active?: boolean;
   color?: Colors;
   svg?: string;
}
const Icon = ({ color, icon, iconSize, active = false, svg }: Props) => {
   return (
      <>
         {icon ? (
            <SIcon color={color} icon={icon} size={iconSize} />
         ) : (
            <SIcon color={color} svg={svg} size={iconSize} />
         )}
      </>
   );
};

export default Icon;
