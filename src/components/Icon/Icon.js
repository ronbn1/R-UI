import React from "react";
import { SIcon } from "./style";
var Icon = function (_a) {
    var color = _a.color, icon = _a.icon, iconSize = _a.iconSize, _b = _a.active, active = _b === void 0 ? false : _b;
    console.log("icon", icon);
    return (React.createElement(React.Fragment, null,
        React.createElement(SIcon, { color: color, icon: icon, size: iconSize })));
};
export default Icon;
//# sourceMappingURL=Icon.js.map