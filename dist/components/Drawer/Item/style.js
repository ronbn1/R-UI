var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import onlineTheme from "../../../themes/online";
export var SItemContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   display: flex;\n   flex-direction: column;\n   padding-top: 0.5rem;\n   position: absolute;\n   top: 40%;\n   left: 0;\n   width: 100%;\n   transform: translateY(-50%);\n"], ["\n   display: flex;\n   flex-direction: column;\n   padding-top: 0.5rem;\n   position: absolute;\n   top: 40%;\n   left: 0;\n   width: 100%;\n   transform: translateY(-50%);\n"])));
export var SItem = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n   display: flex;\n   margin: 0.2rem;\n   img {\n      opacity: 0.5;\n      width: 20px;\n      padding: 0 3rem 0 1rem;\n   }\n   color: ", ";\n   width: 100%;\n   text-align: center;\n   padding: 0.5rem 0;\n   font-family: ", ";\n   cursor: pointer;\n   &:hover {\n      background-color: ", ";\n   }\n"], ["\n   display: flex;\n   margin: 0.2rem;\n   img {\n      opacity: 0.5;\n      width: 20px;\n      padding: 0 3rem 0 1rem;\n   }\n   color: ",
    ";\n   width: 100%;\n   text-align: center;\n   padding: 0.5rem 0;\n   font-family: ", ";\n   cursor: pointer;\n   &:hover {\n      background-color: ", ";\n   }\n"])), function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.dark;
}, onlineTheme.font.family, onlineTheme.colors.primary + "f0");
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map