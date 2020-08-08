import { StyledComponent } from "styled-components";
interface ISBackdropProps {
    isFadeOut: boolean;
    opacity?: number;
    timer?: number;
    bg?: boolean;
}
export declare const SBackdrop: StyledComponent<"div", any, ISBackdropProps, never>;
export {};
