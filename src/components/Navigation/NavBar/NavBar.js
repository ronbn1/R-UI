import React from "react";
import { SNavBar } from "./style";
import { SIcon } from "../Item/style";
import Title from "../../Title/Title";
import { Sizes, Colors } from "../../../enums";
var SideNav = function (_a) {
    var title = _a.title, icon = _a.icon;
    return (React.createElement(React.Fragment, null,
        React.createElement(SNavBar, null,
            title && React.createElement(Title, { text: title, color: Colors.LIGHT }),
            React.createElement("div", { className: "iconsContainer" }, icon &&
                icon.map(function (i) { return (React.createElement("div", { className: "icon" },
                    React.createElement(SIcon, { icon: i, size: Sizes.MEDIUM, color: Colors.LIGHT }))); })))));
};
export default SideNav;
//# sourceMappingURL=NavBar.js.map