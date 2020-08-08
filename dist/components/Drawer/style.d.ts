import { Sizes } from "../../enums";
import { colorType } from "../../types/types";
interface ISDrawer {
    drawerWith: Sizes;
    isFadeOut: Boolean;
    color: colorType;
}
export declare const SDrawer: import("styled-components").StyledComponent<"div", any, ISDrawer, never>;
export {};
