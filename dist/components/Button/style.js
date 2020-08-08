var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import onlineTheme from "../../themes/online";
export var SIcon = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   background-size: cover;\n   display: inline-block;\n   position: relative;\n   left: 5px;\n   top: 2.5px;\n   width: 1rem;\n   height: 1rem;\n   background-color: ", ";\n   mask: ", ";\n   mask-repeat: no-repeat;\n"], ["\n   background-size: cover;\n   display: inline-block;\n   position: relative;\n   left: 5px;\n   top: 2.5px;\n   width: 1rem;\n   height: 1rem;\n   background-color: ",
    ";\n   mask: ",
    ";\n   mask-repeat: no-repeat;\n"])), function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.icon && "url(" + onlineTheme.icons[props.icon] + ") ";
});
export var SButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n   border: transparent;\n   color: ", ";\n\n   font-size: ", ";\n\n   border: ", ";\n\n   margin: 0.2rem;\n   padding: 0.2rem 0.7rem;\n   background-color: transparent;\n   border-radius: 3px;\n   outline: none;\n   transition: background 0.2s, color 0.2s;\n\n   &:hover {\n      background: ", ";\n      color: white;\n      cursor: pointer;\n      ", " {\n         background-color: white;\n      }\n   }\n"], ["\n   border: transparent;\n   color: ",
    ";\n\n   font-size: ",
    ";\n\n   border: ",
    ";\n\n   margin: 0.2rem;\n   padding: 0.2rem 0.7rem;\n   background-color: transparent;\n   border-radius: 3px;\n   outline: none;\n   transition: background 0.2s, color 0.2s;\n\n   &:hover {\n      background: ",
    ";\n      color: white;\n      cursor: pointer;\n      ", " {\n         background-color: white;\n      }\n   }\n"])), function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.size ? onlineTheme.sizes[props.size] : "";
}, function (props) {
    return props.color
        ? "1px solid " + onlineTheme.colors[props.color]
        : "1px solid " + onlineTheme.colors.primary;
}, function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, SIcon);
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map