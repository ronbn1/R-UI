import { StyledComponent } from "styled-components";
import { iconType } from "../../types/types";
import { Sizes, Colors } from "../../enums/";
interface ISIconProps {
    color?: Colors;
    icon: iconType;
    size?: Sizes;
}
export declare const SIcon: StyledComponent<"div", any, ISIconProps, never>;
export {};
