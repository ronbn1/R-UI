import { StyledComponent } from "styled-components";
import { Colors } from "../../../enums";
interface ISToggle {
    color?: Colors;
}
export declare const SToggle: StyledComponent<"p", any, ISToggle, never>;
interface ISMenu {
    color?: Colors;
}
export declare const SMenu: StyledComponent<"div", any, ISMenu, never>;
interface ISItem {
    color?: Colors;
}
export declare const SItem: StyledComponent<"div", any, ISItem, never>;
export {};
