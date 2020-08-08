import { StyledComponent } from "styled-components";
import { colorType, sizesType } from "../../types/types";
import { Sizes } from "../../enums";
interface ISCard {
    width?: Sizes;
}
interface ISBody {
}
interface ISTitle {
    size?: sizesType;
    color?: colorType;
}
interface ISSubtitle {
    size?: sizesType;
    color?: colorType;
}
interface ISText {
    size?: sizesType;
    color?: colorType;
}
interface ISTopIcon {
}
interface ISLinkContainer {
}
export declare const SCard: StyledComponent<"div", any, ISCard, never>;
export declare const SBody: StyledComponent<"div", any, ISBody, never>;
export declare const STitle: StyledComponent<"h2", any, ISTitle, never>;
export declare const SSubtitle: StyledComponent<"p", any, ISSubtitle, never>;
export declare const SText: StyledComponent<"p", any, ISText, never>;
export declare const SLinkContainer: StyledComponent<"div", any, ISLinkContainer, never>;
export declare const STopIcon: StyledComponent<"div", any, ISTopIcon, never>;
export {};
