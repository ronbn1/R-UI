var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { Sizes } from "../../enums/";
import onlineTheme from "../../themes/online";
export var SIcon = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   background-size: cover;\n   opacity: 0.5;\n   width: ", ";\n   height: ", ";\n   background-color: ", ";\n   mask: ", ";\n   mask-repeat: no-repeat;\n"], ["\n   background-size: cover;\n   opacity: 0.5;\n   width: ",
    ";\n   height: ",
    ";\n   background-color: ",
    ";\n   mask: ",
    ";\n   mask-repeat: no-repeat;\n"])), function (_a) {
    var size = _a.size;
    return size === Sizes.MEDIUM
        ? "1.5rem"
        : size === Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (_a) {
    var size = _a.size;
    return size === Sizes.MEDIUM
        ? "1.5rem"
        : size === Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.icon && "url(" + onlineTheme.icons[props.icon] + ") ";
});
var templateObject_1;
//# sourceMappingURL=style.js.map