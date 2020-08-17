/// <reference types="react" />
import { colorType, sizesType, iconType } from "../../types/types";
import { Sizes, Colors } from "../../enums";
interface ICardProps {
    children?: any;
    width?: Sizes;
    style?: {};
    borderColor?: string;
}
interface IBodyProps {
    children: any;
    style?: {};
}
interface ITitleProps {
    children: string;
    size?: sizesType;
    color?: colorType;
    style?: {};
}
interface ISubtitleProps {
    children: any;
    size?: sizesType;
    color?: colorType;
    style?: {};
}
interface ITextProps {
    children: any;
    size?: sizesType;
    color?: colorType;
    style?: {};
}
interface ILinkProps {
    children: any;
    color?: colorType;
}
interface ILinksContainer {
    children: any;
    style?: {};
}
interface ITopIcon {
    icon?: iconType;
    color?: Colors;
}
declare const Card: {
    ({ children, width, style, borderColor }: ICardProps): JSX.Element;
    Body: ({ children, style }: IBodyProps) => JSX.Element;
    Title: ({ children, size, color, style }: ITitleProps) => JSX.Element;
    Subtitle: ({ children, size, color, style }: ISubtitleProps) => JSX.Element;
    Text: ({ children, size, color, style }: ITextProps) => JSX.Element;
    LinksContainer: ({ children, style }: ILinksContainer) => JSX.Element;
    Link: ({ children, color }: ILinkProps) => JSX.Element;
    TopIcon: ({ icon, color }: ITopIcon) => JSX.Element;
};
export default Card;
