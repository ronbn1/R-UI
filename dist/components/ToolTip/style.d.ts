import React from "react";
import { StyledComponent } from "styled-components";
import { Position } from "../../enums/toolTipPosition";
interface ISContainerProps {
    children: React.ReactNode;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
interface ISToolTipProps {
    children?: React.ReactNode;
    isTitle?: boolean;
    side: Position;
}
export declare const SToolTipContainer: StyledComponent<"div", ISContainerProps, {}, never>;
export declare const SToolTip: React.FunctionComponent<ISToolTipProps>;
export declare const Triangular: React.FunctionComponent<ISToolTipProps>;
export declare const ToolTipTitle: React.FunctionComponent;
export {};
