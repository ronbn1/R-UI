import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { jsxDecorator } from "storybook-addon-jsx";
import Item from "../Item/Item";
import onlineTheme from "../../../themes/online";
import { Sizes, Colors } from "../../../enums";

export default {
   title: "Navigation",
   component: Dropdown,
   decorators: [jsxDecorator],
};

export const DropdownMenu = () => {
   const dropDownConfig = {
      label: "Dropdown",
      links: [
         {
            label: "First link",
            url: "",
         },
         {
            label: "Second link",
            url: "",
         },
         {
            label: "Third link",
            url: "",
         },
         {
            label: "Fourth link",
            url: "",
         },
      ],
   };
   return (
      <div style={{ padding: "3rem" }}>
         <Dropdown>
            <Dropdown.Toggle color={Colors.PRIMARY}>
               Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
               <Dropdown.Item color={Colors.DARK}>Another action</Dropdown.Item>
               <Dropdown.Item color={Colors.DARK}>Something else</Dropdown.Item>
               <Dropdown.Item color={Colors.DARK}>Action</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
      </div>
   );
};
