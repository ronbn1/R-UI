import React, { useState, useEffect } from "react";
import { SDrawer } from "./style";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { colorType, sizesType } from "../../types/types";
import onlineTheme from "../../themes/online";
import { Sizes, Position } from "../../enums";
import Backdrop from "../Backdrop/Backdrop";
import { SIcon } from "../Button/style";
import Item from "./Item/Item";
import { SItemContainer } from "./Item/style";
interface IDrawerProps {
   trigger: any;
   drawerWith?: Sizes;
   color?: colorType;
   closeBtnColor?: colorType;
   title?: string;
   children?: any;
}

const Drawer = ({
   trigger,
   drawerWith = Sizes.SMALL,
   color = "dark",
   closeBtnColor,
   title,
   children,
}: IDrawerProps) => {
   const [isShown, setIsShown] = useState(false);
   const [isFadeOut, setIsFadeOut] = useState(false);

   const closeFn = () => {
      setIsFadeOut(true);
      setTimeout(() => {
         setIsShown(false);
      }, 300);
   };
   return (
      <>
         <span
            onClick={() => {
               setIsFadeOut(false);
               setIsShown((cur) => !cur);
            }}
         >
            {trigger}
         </span>
         {isShown && (
            <>
               <Backdrop closeFn={closeFn} opacity={0.05} timer={0.3} />
               {console.log(color)}
               <SDrawer
                  drawerWith={drawerWith}
                  isFadeOut={isFadeOut}
                  color={color}
               >
                  <div className="iconContainer" onClick={() => closeFn()}>
                     <SIcon
                        icon="leftArrow"
                        color={
                           closeBtnColor
                              ? closeBtnColor
                              : color === "dark"
                              ? "light"
                              : "dark"
                        }
                     />
                  </div>
                  {title && <h2>{title}</h2>}
                  <SItemContainer>{children}</SItemContainer>
               </SDrawer>
            </>
         )}
      </>
   );
};

export default Drawer;
