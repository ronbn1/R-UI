/// <reference types="react" />
import { colorType, iconType } from "../../../types/types";
interface IItemProps {
    label: string;
    color?: colorType;
    icon?: iconType;
}
declare const Item: ({ label, color, icon }: IItemProps) => JSX.Element;
export default Item;
