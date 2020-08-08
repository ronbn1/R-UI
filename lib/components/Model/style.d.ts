import { Sizes, Position } from "../../enums";
interface ISModal {
    show: boolean;
    size?: Sizes;
    isFadeOut: boolean;
}
interface ISButtonContainer {
    buttonPosition?: Position.LEFT | Position.RIGHT | Position.CENTER;
}
export declare const SModal: import("styled-components").StyledComponent<"div", any, ISModal, never>;
export declare const SBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SBtnContainer: import("styled-components").StyledComponent<"div", any, ISButtonContainer, never>;
export {};
