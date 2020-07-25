import React from "react";
import styled from "styled-components";
import Drawer from "./Drawer";
import { jsxDecorator } from "storybook-addon-jsx";
import Item from "./Item/Item";
import onlineTheme from "../../themes/online";
export default {
   title: "Drawer",
   component: Drawer,
   decorators: [jsxDecorator],
};

export const DrawerNav = () => {
   const trigger = <Trigger>OPEN DRAWER</Trigger>;
   return (
      <>
         <Drawer trigger={trigger} color="secondary" title="My Drawer">
            <Item label="first link" icon={onlineTheme.icons.heart} />
            <Item label="first link" icon={onlineTheme.icons.plus} />
            <Item label="first link" icon={onlineTheme.icons.smile} />
            <Item label="first link" icon={onlineTheme.icons.trash} />
         </Drawer>
      </>
   );
};

const Trigger = styled.span`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
