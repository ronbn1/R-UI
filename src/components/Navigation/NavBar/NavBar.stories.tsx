import React, { useState } from "react";
import NavBar from "./NavBar";
import { jsxDecorator } from "storybook-addon-jsx";
import Item from "../Item/Item";
import onlineTheme from "../../../themes/online";
import { Sizes } from "../../../enums";
import { GlobalStyle } from "../../../themes/globalStyls";
export default {
   title: "Navigation",
   component: NavBar,
   decorators: [jsxDecorator],
};

export const TopNavBar = () => {
   return (
      <div
         style={{
            backgroundColor: onlineTheme.colors.dark,
            height: "100vh",
            width: "100vw",
         }}
      >
         <GlobalStyle />
         <NavBar title="Title" icon={["doc", "conf", "bell"]} />;
      </div>
   );
};
