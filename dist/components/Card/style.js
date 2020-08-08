var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { Sizes } from "../../enums";
import onlineTheme from "../../themes/online";
export var SCard = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   width: ", ";\n   border: 1px solid #00000050;\n   border-radius: 8px;\n"], ["\n   width: ",
    ";\n   border: 1px solid #00000050;\n   border-radius: 8px;\n"])), function (_a) {
    var width = _a.width;
    return width === Sizes.LARGE
        ? "25rem"
        : width === Sizes.MEDIUM
            ? "20rem"
            : width === Sizes.SMALL
                ? "15rem"
                : "10rem";
});
export var SBody = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n   padding: 1rem;\n"], ["\n   padding: 1rem;\n"])));
export var STitle = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n   font-size: ", ";\n   color: ", ";\n   padding: 0 0.4rem;\n"], ["\n   font-size: ",
    ";\n   color: ",
    ";\n   padding: 0 0.4rem;\n"])), function (_a) {
    var size = _a.size;
    return size ? onlineTheme.sizes[size] : "1.2rem";
}, function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.primary;
});
export var SSubtitle = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n   font-size: ", ";\n\n   color: ", ";\n   padding: 0.5rem;\n"], ["\n   font-size: ",
    ";\n\n   color: ",
    ";\n   padding: 0.5rem;\n"])), function (_a) {
    var size = _a.size;
    return size ? onlineTheme.sizes[size] : "1rem";
}, function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.dark;
});
export var SText = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n   font-size: ", ";\n\n   color: ", ";\n   padding: 0.5rem;\n"], ["\n   font-size: ",
    ";\n\n   color: ",
    ";\n   padding: 0.5rem;\n"])), function (_a) {
    var size = _a.size;
    return size ? onlineTheme.sizes[size] : "1rem";
}, function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.secondary;
});
export var SLinkContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n   display: flex;\n   justify-content: center;\n"], ["\n   display: flex;\n   justify-content: center;\n"])));
export var STopIcon = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n   display: flex;\n   justify-content: flex-end;\n"], ["\n   display: flex;\n   justify-content: flex-end;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
// interface ISTitle {}
// export const STitle: StyledComponent<"h1", any, STitle, never> = styled(Title)``;
// interface ISMenu {
//    color?: Colors;
// }
// export const SMenu: StyledComponent<"div", any, ISMenu, never> = styled.div`
//    width: fit-content;
//    margin: 0.5rem 0;
//    border: 1px solid #eeeeee;
//    border-radius: 5px;
//    background-color: white;
// `;
// interface ISItem {
//    color?: Colors;
// }
// export const SItem: StyledComponent<"div", any, ISItem, never> = styled.div`
//    padding: 0.5rem 1rem;
//    color: ${({ color }: ISItem) => color && onlineTheme.colors[color]};
//    font-family: ${onlineTheme.font.family};
//    font-size: 0.9rem;
//    &:hover {
//       cursor: pointer;
//       background-color: #eeeeee60;
//    }
// `;
//# sourceMappingURL=style.js.map