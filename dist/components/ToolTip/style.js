var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import onlineTheme from "../../themes/online";
import { positionToolTip, positionToolTipTriangular, } from "../../helpers/helpers";
export var SToolTipContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   position: relative;\n   display: inline-block;\n"], ["\n   position: relative;\n   display: inline-block;\n"])));
export var SToolTip = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n   background-color: ", ";\n   border-radius: 5px;\n   position: absolute;\n   bottom: 120%;\n   left: 50%;\n   transform: translateX(-50%);\n   padding: ", ";\n   color: #eee;\n   text-align: center;\n   width: max-content;\n   max-width: 15em;\n   .body {\n      font-size: ", ";\n      padding: 0.3em;\n   }\n\n   ", "\n"], ["\n   background-color: ", ";\n   border-radius: 5px;\n   position: absolute;\n   bottom: 120%;\n   left: 50%;\n   transform: translateX(-50%);\n   padding: ", ";\n   color: #eee;\n   text-align: center;\n   width: max-content;\n   max-width: 15em;\n   .body {\n      font-size: ", ";\n      padding: 0.3em;\n   }\n\n   ",
    "\n"])), onlineTheme.colors.dark, function (_a) {
    var isTitle = _a.isTitle;
    return (isTitle ? "0.5rem" : 0);
}, onlineTheme.font.size.smallMedium2, function (_a) {
    var side = _a.side;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n         ", "\n      "], ["\n         ", "\n      "])), positionToolTip(side));
});
export var Triangular = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n   clip-path: polygon(50% 100%, 0 0, 100% 0);\n   background-color: ", ";\n   width: 0.8rem;\n   height: 0.5rem;\n   position: absolute;\n   ", "\n"], ["\n   clip-path: polygon(50% 100%, 0 0, 100% 0);\n   background-color: ", ";\n   width: 0.8rem;\n   height: 0.5rem;\n   position: absolute;\n   ",
    "\n"])), onlineTheme.colors.dark, function (_a) {
    var side = _a.side;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n         ", "\n      "], ["\n         ", "\n      "])), positionToolTipTriangular(side));
});
export var ToolTipTitle = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n   text-align: left;\n   border-bottom: 1px solid #eeeeee50;\n"], ["\n   text-align: left;\n   border-bottom: 1px solid #eeeeee50;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=style.js.map