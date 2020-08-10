import React, { useState } from "react";
import { SIcon } from "./style";
import { iconType } from "../../types/types";
import { Colors, Sizes } from "../../enums/";
interface Props {
   icon: any;
   iconSize?: Sizes;
   active?: boolean;
   color?: Colors;
}
const Icon = ({ color, icon, iconSize, active = false }: Props) => {
   return (
      <>
         {console.log("ron benaish")}
         <SIcon color={color} icon={icon} size={iconSize} />
      </>
   );
};

export default Icon;
