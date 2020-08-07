import React, { useState } from "react";
//import Item from "../Item/Item";
import { colorType, sizesType, iconType } from "../../types/types";
import { GlobalStyle } from "../../themes/globalStyls";
import { Sizes, Colors } from "../../enums";
import Icon from "../Icon/Icon";
import onlineTheme from "../../themes/online";
import {
   SBody,
   SSubtitle,
   STitle,
   SCard,
   SText,
   SLinkContainer,
   STopIcon,
} from "./style";
import Button from "../Button/Button";
interface ICardProps {
   children?: any;
   width?: Sizes;
   style?: {};
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
const Card = ({ children, width, style = {} }: ICardProps) => {
   return (
      <SCard width={width} style={{ ...style }}>
         <GlobalStyle />
         {children}
      </SCard>
   );
};

const Body = ({ children, style = {} }: IBodyProps) => {
   return <SBody style={{ ...style }}>{children}</SBody>;
};

const Title = ({ children, size, color, style = {} }: ITitleProps) => {
   return (
      <STitle size={size} color={color} style={{ ...style }}>
         {children}
      </STitle>
   );
};
const Subtitle = ({ children, size, color, style = {} }: ISubtitleProps) => {
   return (
      <SSubtitle size={size} color={color} style={{ ...style }}>
         {children}
      </SSubtitle>
   );
};
const Text = ({ children, size, color, style = {} }: ITextProps) => {
   return (
      <SText size={size} color={color} style={{ ...style }}>
         {children}
      </SText>
   );
};
const LinksContainer = ({ children, style = {} }: ILinksContainer) => {
   return <SLinkContainer style={{ ...style }}> {children}</SLinkContainer>;
};
const Link = ({ children, color }: ILinkProps) => {
   return <Button text={children} color={color} />;
};

const TopIcon = ({ icon, color }: ITopIcon) => {
   return <STopIcon>{icon && <Icon icon={icon} color={color} />}</STopIcon>;
};

Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.LinksContainer = LinksContainer;
Card.Link = Link;
Card.TopIcon = TopIcon;
export default Card;
