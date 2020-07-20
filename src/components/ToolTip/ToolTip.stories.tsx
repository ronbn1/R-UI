import React from "react";
import ToolTip from "./ToolTip";

export default {
   title: "Tool Tip",
   component: ToolTip,
   decorators: [
      (storyFn: any) => (
         <div
            style={{
               height: "100vh",
               width: "50vw",
               display: "flex",
               justifyContent: "space-around",
               alignItems: "center",
            }}
         >
            {storyFn()}
         </div>
      ),
   ],
};

export const Tooltip = () => {
   return (
      <>
         <ToolTip body=" I'm the tooltip">Hover me</ToolTip>
         <ToolTip body=" I'm the tooltip with title" title="Title for tooltip">
            Hover me
         </ToolTip>
      </>
   );
};
