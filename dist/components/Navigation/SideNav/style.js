var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { Sizes, Colors } from "../../../enums/";
import onlineTheme from "../../../themes/online";
export var SSideNav = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n   width: ", ";\n   height: 100vh;\n   ", "\n"], ["\n   width: ",
    ";\n   height: 100vh;\n   ",
    "\n"])), function (_a) {
    var _b = _a.width, width = _b === void 0 ? Sizes.MEDIUM : _b;
    return width === Sizes.MEDIUM
        ? "150px"
        : width === Sizes.LARGE
            ? "200px"
            : "125px";
}, function (_a) {
    var gradientBackgroundColor = _a.gradientBackgroundColor, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? Colors.PRIMARY : _b;
    return gradientBackgroundColor
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n              background: linear-gradient(\n                 220deg,\n                 ", ",\n                 ", "\n              );\n           "], ["\n              background: linear-gradient(\n                 220deg,\n                 ", ",\n                 ", "\n              );\n           "])), onlineTheme.colors[gradientBackgroundColor[0]] + "e0", onlineTheme.colors[gradientBackgroundColor[1]]) : backgroundColor && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n              background-color: ", ";\n           "], ["\n              background-color: ", ";\n           "])), onlineTheme.colors[backgroundColor]);
});
export var SLogo = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n   font-size: 1.5rem;\n   color: ", ";\n   text-align: center;\n   padding: 1rem 0;\n   font-family: ", ";\n"], ["\n   font-size: 1.5rem;\n   color: ", ";\n   text-align: center;\n   padding: 1rem 0;\n   font-family: ", ";\n"])), onlineTheme.colors.primary, onlineTheme.font.family);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=style.js.map