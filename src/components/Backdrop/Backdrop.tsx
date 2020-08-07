import React, { useState } from "react";
import { SBackdrop } from "./style";

interface IBackdropProps {
   closeFn: () => any;
   opacity?: number;
   timer?: number;
   bg?: boolean;
}

const Backdrop = ({
   closeFn,
   opacity = 0.05,
   timer = 0.2,
   bg = false,
}: IBackdropProps) => {
   const [isFadeOut, setIsFadeOut] = useState(false);
   return (
      <SBackdrop
         bg={bg}
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
