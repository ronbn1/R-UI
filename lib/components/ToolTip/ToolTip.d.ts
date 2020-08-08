import React from "react";
import { Position } from "../../enums";
interface IToolTipPops {
    children: React.ReactNode;
    body?: string;
    title?: string;
    side?: Position;
}
declare const ToolTip: ({ children, body, title, side, }: IToolTipPops) => JSX.Element;
export default ToolTip;
