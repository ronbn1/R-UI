import React from "react";
import { SNavBar } from "./style";
import { SIcon } from "../../Icon/style";
import Item from "../Item/Item";
import Title from "../../Title/Title";
import { colorType, sizesType, iconType } from "../../../types/types";
import { GlobalStyle } from "../../../themes/globalStyls";
import { Sizes, Colors } from "../../../enums";

interface INavBar {
   title?: string;
   icon?: iconType[];
   titleSize?: sizesType;
   titleStyle?: any;
}

const SideNav = ({ title, icon, titleStyle }: INavBar) => {
   return (
      <>
         <SNavBar>
            {title && (
               <Title
                  text={title}
                  color={Colors.LIGHT}
                  style={{ ...titleStyle }}
               />
            )}
            <div className="iconsContainer">
               {icon &&
                  icon.map((i) => (
                     <div className="icon">
                        <SIcon
                           svg={i}
                           size={Sizes.MEDIUM}
                           color={Colors.LIGHT}
                        />
                     </div>
                  ))}
            </div>
         </SNavBar>
      </>
   );
};

export default SideNav;
