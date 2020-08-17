/// <reference types="react" />
import { iconType } from "../../types/types";
import { Colors, Sizes } from "../../enums/";
interface Props {
    icon?: iconType;
    iconSize?: Sizes;
    active?: boolean;
    color?: Colors;
    svg?: string;
}
declare const Icon: ({ color, icon, iconSize, active, svg }: Props) => JSX.Element;
export default Icon;
