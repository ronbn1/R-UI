import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import onlineTheme from "./online";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family:"${onlineTheme.font.family}"
`;
