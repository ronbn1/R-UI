import React, { useState } from "react";
import { SToolTipContainer, SToolTip, Triangular, ToolTipTitle } from "./style";
import { colorType, sizesType } from "../../types/types";

interface IToolTipPops {
   children: React.ReactNode;
   body?: string;
   title?: string;
}

const ToolTip = ({ children, body, title }: IToolTipPops) => {
   const [showToolTip, setShowToolTip] = useState(false);
   return (
      <>
         <SToolTipContainer
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
         >
            {showToolTip && (
               <>
                  <SToolTip isTitle>
                     {title && <ToolTipTitle>{title}</ToolTipTitle>}
                     <div className="body">{body}</div>
                  </SToolTip>
                  <Triangular />
               </>
            )}

            {children}
         </SToolTipContainer>
      </>
   );
};

export default ToolTip;
