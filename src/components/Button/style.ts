import styled from "styled-components";
import { colorType, sizesType, iconType } from "../../types/types";
import { SIcon } from "../Icon/style";
import onlineTheme from "../../themes/online";
interface Props {
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
}
// export const SIcon = styled.span`
//    background-size: cover;
//    display: inline-block;
//    position: relative;
//    left: 5px;
//    top: 2.5px;
//    width: 1rem;
//    height: 1rem;
//    background-color: ${(props: Props) =>
//       props.color
//          ? onlineTheme.colors[props.color]
//          : onlineTheme.colors.primary};
//    mask: ${(props: Props) => {
//       console.log(onlineTheme.icons);
//       return props.icon && `url(${onlineTheme.icons[props.icon]}) `;
//    }};
//    mask-repeat: no-repeat;
// `;

export const SButton = styled.button`
   display: flex;
   border: transparent;

   color: ${(props: Props) =>
      props.color
         ? onlineTheme.colors[props.color]
         : onlineTheme.colors.primary};

   font-size: ${(props: Props) =>
      props.size ? onlineTheme.sizes[props.size] : ""};

   border: ${(props: Props) =>
      props.color
         ? `1px solid ${onlineTheme.colors[props.color]}`
         : `1px solid ${onlineTheme.colors.primary}`};

   margin: 0.2rem;
   padding: 0.2rem 0.7rem;
   background-color: transparent;
   border-radius: 3px;
   outline: none;
   transition: background 0.2s, color 0.2s;
   .text {
      padding: 0 0.5rem;
   }
   ${SIcon} {
      margin-top: 1px;
   }
   &:hover {
      background: ${(props: Props) =>
         props.color
            ? onlineTheme.colors[props.color]
            : onlineTheme.colors.primary};
      color: white;
      cursor: pointer;
      ${SIcon} {
         background-color: white;
      }
   }
`;
