import React, { useState } from "react";
//import Item from "../Item/Item";
import { colorType, sizesType, iconType } from "../../../types/types";
import { GlobalStyle } from "../../../themes/globalStyls";
import { Sizes, Colors } from "../../../enums";
import Icon from "../../Icon/Icon";
import onlineTheme from "../../../themes/online";
import { SToggle, SMenu, SItem } from "./style";
import Backdrop from "../../Backdrop/Backdrop";
interface IDropdownProps {
   children?: any;
}
const Dropdown = ({ children }: IDropdownProps) => {
   const toggle = children.filter((c) => c.type.name === "Toggle");
   const menu = children.filter((c) => c.type.name === "Menu");
   const [isShown, setIsShown] = useState(false);
   return (
      <>
         <GlobalStyle />
         <span onClick={() => setIsShown((cur) => !cur)}>{toggle}</span>
         {isShown && (
            <>
               <Backdrop closeFn={() => setIsShown(false)} />
               {menu}
            </>
         )}
      </>
   );
};

interface IToggleProps {
   children: any;
   color?: Colors;
}
const Toggle = ({ children, color = Colors.DARK }: IToggleProps) => {
   return (
      <>
         <SToggle color={color}>
            {children}
            <span className="iconContainer">
               <Icon icon="downArrow" color={color} />
            </span>
         </SToggle>
      </>
   );
};

interface IMenuProps {
   children: any;
}

const Menu = ({ children }: IMenuProps) => {
   return (
      <>
         <SMenu>{children}</SMenu>
      </>
   );
};
interface IItemProps {
   children: any;
   color?: Colors;
}
const Item = ({ children, color = Colors.DARK }: IItemProps) => {
   return (
      <>
         <SItem color={color}>{children}</SItem>
      </>
   );
};

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
export default Dropdown;
