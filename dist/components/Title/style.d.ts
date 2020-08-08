/// <reference types="react" />
import { colorType, sizesType } from "../../types/types";
interface Props {
    size?: sizesType;
    underline?: colorType;
    color?: colorType;
    square?: colorType;
    align?: string;
}
declare const STitle: React.FunctionComponent<Props>;
export default STitle;
