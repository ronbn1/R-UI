import { StyledComponent } from "styled-components";
import { Sizes, Colors } from "../../../enums/";
interface Props {
    width: Sizes;
    backgroundColor?: Colors;
    gradientBackgroundColor?: Colors[];
}
interface ILogoProps {
    children: any;
}
export declare const SSideNav: StyledComponent<"div", any, Props, never>;
export declare const SLogo: StyledComponent<"div", any, ILogoProps, never>;
export {};
