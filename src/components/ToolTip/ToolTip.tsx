import React, { useState } from "react";
import { SToolTipContainer, SToolTip, Triangular, ToolTipTitle } from "./style";
import { Position } from "../../enums/toolTipPosition";

interface IToolTipPops {
   children: React.ReactNode;
   body?: string;
   title?: string;
   side?: Position;
}

const ToolTip = ({
   children,
   body,
   title,
   side = Position.TOP_CENTER,
}: IToolTipPops) => {
   const [showToolTip, setShowToolTip] = useState(false);
   return (
      <>
         <SToolTipContainer
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
         >
            {showToolTip && (
               <>
                  <SToolTip isTitle side={side}>
                     {title && <ToolTipTitle>{title}</ToolTipTitle>}
                     <div className="body">{body}</div>
                  </SToolTip>
                  <Triangular side={side} />
               </>
            )}

            {children}
         </SToolTipContainer>
      </>
   );
};

export default ToolTip;
