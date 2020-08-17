import { StyledComponent } from "styled-components";
import { colorType, sizesType } from "../../types/types";
interface Props {
    size?: sizesType;
    underline?: colorType;
    color?: colorType;
    square?: colorType;
    align?: string;
    style?: any;
}
declare const STitle: StyledComponent<"h1", any, Props, never>;
export default STitle;
