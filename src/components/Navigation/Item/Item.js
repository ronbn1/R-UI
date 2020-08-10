import React from "react";
import { SItem, SLabel, SIcon } from "./style";
import { Colors } from "../../../enums/";
var Item = function (_a) {
    var label = _a.label, icon = _a.icon, iconSize = _a.iconSize, _b = _a.active, active = _b === void 0 ? false : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement(SItem, { active: active },
            React.createElement("div", { className: "selectedLine" }),
            icon && React.createElement(SIcon, { color: Colors.LIGHT, icon: icon, size: iconSize }),
            React.createElement(SLabel, null, label))));
};
export default Item;
//# sourceMappingURL=Item.js.map