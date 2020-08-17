import { StyledComponent } from "styled-components";
import { colorType, iconType } from "../../types/types";
import { Sizes, Colors } from "../../enums/";
interface ISIconProps {
    color?: Colors | colorType;
    icon?: iconType;
    size?: Sizes;
    svg?: string;
}
export declare const SIcon: StyledComponent<"div", any, ISIconProps, never>;
export {};
