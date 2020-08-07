import React from "react";
import { SSideNav, SLogo } from "./style";
import Item from "../Item/Item";
import { colorType, sizesType, iconType } from "../../../types/types";
import { GlobalStyle } from "../../../themes/globalStyls";
import { Sizes, Colors } from "../../../enums";

interface ISideNavProps {
   logo?: any;
   children?: any;
}

const SideNav = ({ logo, children }: ISideNavProps) => {
   return (
      <>
         <GlobalStyle />
         <SSideNav
            width={Sizes.SMALL}
            gradientBackgroundColor={[Colors.DARK, Colors.DARKER]}
         >
            {logo && <SLogo>{logo}</SLogo>}
            {children}
         </SSideNav>
      </>
   );
};

export default SideNav;
