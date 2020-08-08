import React from "react";
import { SSideNav, SLogo } from "./style";
import { GlobalStyle } from "../../../themes/globalStyls";
import { Sizes, Colors } from "../../../enums";
var SideNav = function (_a) {
    var logo = _a.logo, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyle, null),
        React.createElement(SSideNav, { width: Sizes.SMALL, gradientBackgroundColor: [Colors.DARK, Colors.DARKER] },
            logo && React.createElement(SLogo, null, logo),
            children)));
};
export default SideNav;
//# sourceMappingURL=SideNav.js.map