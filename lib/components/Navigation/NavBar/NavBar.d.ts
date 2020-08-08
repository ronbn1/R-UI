/// <reference types="react" />
import { iconType } from "../../../types/types";
interface INavBar {
    title?: string;
    icon?: iconType[];
}
declare const SideNav: ({ title, icon }: INavBar) => JSX.Element;
export default SideNav;
