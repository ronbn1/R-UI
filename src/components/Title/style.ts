import styled from "styled-components";
import { colorType, sizesType } from "../../types/types";
import onlineTheme from "../../themes/online";

interface Props {
   size?: sizesType;
   underline?: colorType;
   color?: colorType;
   square?: colorType;
}

const STitle: React.FunctionComponent<Props> = styled.h1`
   font-size: ${(props: Props) =>
      props.size ? onlineTheme.sizes[props.size] : "2rem"};

   border-bottom: ${(props: Props) =>
      props.underline
         ? `1px solid ${onlineTheme.colors[props.underline]}`
         : ""};

   color: ${(props: Props) =>
      props.color
         ? onlineTheme.colors[props.color]
         : onlineTheme.colors.primary};

   font-family: "Roboto", sans-serif;
   font-weight: 600;
   position: relative;
   width: fit-content;
   margin: 2rem;
   position: relative;
   &:before {
      position: absolute;
      content: "";
      width: 15px;
      height: 15px;
      top: 45%;
      left: -25px;

      background-color: ${(props: Props) =>
         props.square ? `${onlineTheme.colors[props.square]}` : ""};

      border-radius: 2px;
      transform: rotate(45deg) translateY(-50%);
   }
`;
export default STitle;
