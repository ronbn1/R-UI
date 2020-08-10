import React from "react";
import { SItem } from "./style";
var Item = function (_a) {
    var label = _a.label, _b = _a.color, color = _b === void 0 ? "dark" : _b, icon = _a.icon;
    return (React.createElement(React.Fragment, null,
        React.createElement(SItem, { color: color },
            icon && React.createElement("img", { src: icon, alt: "" }),
            label)));
};
export default Item;
//# sourceMappingURL=Item.js.map