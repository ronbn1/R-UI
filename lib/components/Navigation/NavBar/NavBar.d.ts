/// <reference types="react" />
import { sizesType, iconType } from "../../../types/types";
interface INavBar {
    title?: string;
    icon?: iconType[];
    titleSize?: sizesType;
    titleStyle?: any;
}
declare const SideNav: ({ title, icon, titleStyle }: INavBar) => JSX.Element;
export default SideNav;
