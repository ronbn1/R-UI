/// <reference types="react" />
import { Colors, Sizes } from "../../enums/";
interface Props {
    icon: any;
    iconSize?: Sizes;
    active?: boolean;
    color?: Colors;
}
declare const Icon: ({ color, icon, iconSize, active }: Props) => JSX.Element;
export default Icon;
