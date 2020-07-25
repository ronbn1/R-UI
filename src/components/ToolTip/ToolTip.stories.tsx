import React from "react";
import ToolTip from "./ToolTip";
import { Position } from "../../enums/toolTipPosition";
import { jsxDecorator } from "storybook-addon-jsx";

const style = { padding: "1rem" };
export default {
   title: "Tool Tip",
   component: ToolTip,
   decorators: [
      (storyFn: any) => (
         <div
            style={{
               height: "100vh",
               padding: "2rem 10rem",
            }}
         >
            {storyFn()}
         </div>
      ),
      jsxDecorator,
   ],
};

export const Tooltip = () => {
   return (
      <>
         <div style={style}>
            <ToolTip body=" I'm the tooltip">Hover me</ToolTip>
         </div>
         <div style={style}>
            <ToolTip
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               TOP
            </ToolTip>
         </div>
         <div style={style}>
            <ToolTip
               side={Position.TOP_RIGHT}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               TOP RIGHT
            </ToolTip>
         </div>
         <div style={style}>
            <ToolTip
               side={Position.TOP_LEFT}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               TOP LEFT
            </ToolTip>{" "}
         </div>

         <div style={style}>
            <ToolTip
               side={Position.BOTTOM_CENTER}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               BOTTOM
            </ToolTip>{" "}
         </div>

         <div style={style}>
            <ToolTip
               side={Position.BOTTOM_RIGHT}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               BOTTOM RIGHT
            </ToolTip>{" "}
         </div>
         <div style={style}>
            <ToolTip
               side={Position.BOTTOM_LEFT}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               BOTTOM LEFT
            </ToolTip>{" "}
         </div>

         <div style={style}>
            <ToolTip
               side={Position.RIGHT}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               RIGHT
            </ToolTip>{" "}
         </div>
         <div style={style}>
            <ToolTip
               side={Position.LEFT}
               body=" I'm the tooltip with title"
               title="Title for tooltip"
            >
               LEFT
            </ToolTip>{" "}
         </div>
      </>
   );
};
