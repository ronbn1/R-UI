import { StyledComponent } from "styled-components";
import { iconType } from "../../../types/types";
import { Sizes, Colors } from "../../../enums/";
interface IProps {
    active: Boolean;
}
interface ISLabelProps {
}
interface ISIconProps {
    color?: Colors;
    icon: iconType;
    size?: Sizes;
}
export declare const SItem: StyledComponent<"div", any, IProps, never>;
export declare const SLabel: StyledComponent<"div", any, ISLabelProps, never>;
export declare const SIcon: StyledComponent<"div", any, ISIconProps, never>;
export {};
