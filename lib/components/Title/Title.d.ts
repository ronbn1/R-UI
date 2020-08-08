/// <reference types="react" />
import { colorType, sizesType } from "../../types/types";
interface ITitleProps {
    text: string;
    color?: colorType;
    size?: sizesType;
    underline?: colorType;
    square?: colorType;
    align?: string;
}
declare const Title: (props: ITitleProps) => JSX.Element;
export default Title;
