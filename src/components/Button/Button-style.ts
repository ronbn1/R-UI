import styled from "styled-components";
import { colorType, sizesType } from "../../types";
import { sizes, colors } from "../../styles/utils";

interface Props {
   color?: colorType;
   size?: sizesType;
}

const StyledButton: React.FunctionComponent<Props> = styled.button`
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
   span {
      position: relative;
      left: 5px;
      top: 1px;
   }
   &:hover {
      background: ${(props: Props) =>
         props.color ? colors[props.color] : colors.primary};
      color: white;
      cursor: pointer;
   }
`;
export default StyledButton;
