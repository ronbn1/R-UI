/// <reference types="react" />
import { colorType, sizesType, iconType } from "../../types/types";
interface Props {
    color?: colorType;
    size?: sizesType;
    icon?: iconType;
}
export declare const SIcon: import("styled-components").StyledComponent<"span", any, Props, never>;
export declare const SButton: React.FunctionComponent<Props>;
export {};
