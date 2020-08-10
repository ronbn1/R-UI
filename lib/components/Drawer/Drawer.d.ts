/// <reference types="react" />
import { colorType } from "../../types/types";
import { Sizes } from "../../enums";
interface IDrawerProps {
    trigger: any;
    drawerWith?: Sizes;
    color?: colorType;
    closeBtnColor?: colorType;
    title?: string;
    children?: any;
    backdropBg?: boolean;
}
declare const Drawer: ({ trigger, drawerWith, color, closeBtnColor, title, children, backdropBg, }: IDrawerProps) => JSX.Element;
export default Drawer;
