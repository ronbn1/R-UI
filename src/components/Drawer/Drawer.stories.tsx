import React from "react";
import styled from "styled-components";
import Drawer from "./Drawer";
import { jsxDecorator } from "storybook-addon-jsx";
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
         <Drawer
            backdropBg={true}
            trigger={trigger}
            color="secondary"
            title="My Drawer"
         >
            <Drawer.Item label="first link" icon={onlineTheme.icons.heart} />
            <Drawer.Item label="first link" icon={onlineTheme.icons.plus} />
            <Drawer.Item label="first link" icon={onlineTheme.icons.smile} />
            <Drawer.Item label="first link" icon={onlineTheme.icons.trash} />
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
