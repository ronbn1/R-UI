import React from "react";
import { SButton, SIcon } from "./style";
var Button = function (_a) {
    var text = _a.text, color = _a.color, size = _a.size, icon = _a.icon, onClick = _a.onClick;
    return (React.createElement("span", { onClick: onClick },
        React.createElement(SButton, { color: color, size: size, icon: icon },
            text,
            icon && React.createElement(SIcon, { icon: icon }))));
};
export default Button;
//# sourceMappingURL=Button.js.map