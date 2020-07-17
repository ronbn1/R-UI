import styled from "styled-components";
import { colorType, sizesType, iconType } from "../../types/types";
import { sizes, colors } from "../../styles/utils";
import onlineTheme from "../../themes/online";

interface Props {
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
}

export const SButton: React.FunctionComponent<Props> = styled.button`
   border: transparent;
   color: ${(props: Props) =>
      props.color ? colors[props.color] : colors.primary};

   font-size: ${(props: Props) => (props.size ? sizes[props.size] : "")};

   border: ${(props: Props) =>
      props.color
         ? `1px solid ${colors[props.color]}`
         : `1px solid ${colors.primary}`};

   margin: 1rem;
   padding: 0.2rem 0.7rem;
   background-color: transparent;
   border-radius: 3px;
   outline: none;
   transition: background 0.2s, color 0.2s;

   &:hover {
      background: ${(props: Props) =>
         props.color ? colors[props.color] : colors.primary};
      color: white;
      cursor: pointer;
      .icon {
         background-color: white;
      }
   }
`;

export const Sicon = styled.span`
   background-size: cover;
   display: inline-block;
   position: relative;
   left: 5px;
   top: 2.5px;
   width: 1rem;
   height: 1rem;
   background-color: ${(props: Props) =>
      props.color
         ? onlineTheme.colors[props.color]
         : onlineTheme.colors.primary};
   mask: ${(props: Props) =>
      props.icon && `url(${onlineTheme.icons[props.icon]}) `};
   mask-repeat: no-repeat;
`;
