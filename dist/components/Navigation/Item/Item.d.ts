/// <reference types="react" />
import { iconType } from "../../../types/types";
import { Sizes } from "../../../enums/";
interface Props {
    label: string;
    icon?: iconType;
    iconSize?: Sizes;
    active?: boolean;
}
declare const Item: ({ label, icon, iconSize, active }: Props) => JSX.Element;
export default Item;
