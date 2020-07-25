import React, { useState } from "react";
import { SBackdrop } from "./style";

interface IBackdropProps {
   closeFn: () => any;
   opacity?: number;
   timer?: number;
}

const Backdrop = ({ closeFn, opacity = 0.05, timer = 0.2 }: IBackdropProps) => {
   const [isFadeOut, setIsFadeOut] = useState(false);
   return (
      <SBackdrop
         onClick={() => {
            setIsFadeOut(true);
            closeFn();
         }}
         isFadeOut={isFadeOut}
         opacity={opacity}
         timer={timer}
      />
   );
};
export default Backdrop;
