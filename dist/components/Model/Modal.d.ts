/// <reference types="react" />
import { colorType } from "../../types/types";
import { Sizes, Position } from "../../enums";
interface IModalProps {
    size?: Sizes;
    children: any;
    body: string | string[];
    title?: string;
    color?: colorType;
    button?: string | string[];
    onClickButton?: any;
    buttonPosition?: Position.CENTER | Position.LEFT | Position.RIGHT;
}
declare const Modal: ({ children, body, title, color, button, onClickButton, size, buttonPosition, }: IModalProps) => JSX.Element;
export default Modal;
