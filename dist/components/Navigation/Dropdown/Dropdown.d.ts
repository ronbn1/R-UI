/// <reference types="react" />
import { Colors } from "../../../enums";
interface IDropdownProps {
    children?: any;
}
declare const Dropdown: {
    ({ children }: IDropdownProps): JSX.Element;
    Toggle: ({ children, color }: IToggleProps) => JSX.Element;
    Menu: ({ children }: IMenuProps) => JSX.Element;
    Item: ({ children, color }: IItemProps) => JSX.Element;
};
interface IToggleProps {
    children: any;
    color?: Colors;
}
interface IMenuProps {
    children: any;
}
interface IItemProps {
    children: any;
    color?: Colors;
}
export default Dropdown;
