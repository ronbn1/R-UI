/// <reference types="react" />
import { colorType, sizesType, iconType } from "../../types/types";
interface IButtonProps {
    text: string;
    color?: colorType;
    size?: sizesType;
    icon?: iconType;
    onClick?: (arg: any) => any;
}
declare const Button: ({ text, color, size, icon, onClick }: IButtonProps) => JSX.Element;
export default Button;
