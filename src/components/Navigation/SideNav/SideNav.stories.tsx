import React, { useState } from "react";
import SideNav from "./SideNav";
import { jsxDecorator } from "storybook-addon-jsx";
import Item from "../Item/Item";
import onlineTheme from "../../../themes/online";
import { Sizes } from "../../../enums";

export default {
   title: "Navigation",
   component: SideNav,
   decorators: [jsxDecorator],
};

export const SideNavBar = () => {
   return (
      <SideNav logo="LOGO">
         <Item
            label="ITEM 1"
            active={true}
            icon="plus"
            iconSize={Sizes.MEDIUM}
         />
         <Item label="ITEM 2" icon="plus" iconSize={Sizes.MEDIUM} />
         <Item label="ITEM 3" icon="plus" iconSize={Sizes.MEDIUM} />
         <Item label="ITEM 4" icon="plus" iconSize={Sizes.MEDIUM} />
      </SideNav>
   );
};
