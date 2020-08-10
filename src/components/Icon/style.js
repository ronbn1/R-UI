"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SIcon = void 0;
var styled_components_1 = require("styled-components");
var enums_1 = require("../../enums/");
var online_1 = require("../../themes/online");
exports.SIcon = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   background-size: cover;\n   opacity: 0.5;\n   width: ", ";\n   height: ", ";\n   background-color: ", ";\n   mask: ", ";\n   mask-repeat: no-repeat;\n"], ["\n   background-size: cover;\n   opacity: 0.5;\n   width: ",
    ";\n   height: ",
    ";\n   background-color: ",
    ";\n   mask: ",
    ";\n   mask-repeat: no-repeat;\n"])), function (_a) {
    var size = _a.size;
    return size === enums_1.Sizes.MEDIUM
        ? "1.5rem"
        : size === enums_1.Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (_a) {
    var size = _a.size;
    return size === enums_1.Sizes.MEDIUM
        ? "1.5rem"
        : size === enums_1.Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (props) {
    return props.color
        ? online_1["default"].colors[props.color]
        : online_1["default"].colors.primary;
}, function (props) {
    return props.icon && "url(" + online_1["default"].icons[props.icon] + ") ";
});
var templateObject_1;
