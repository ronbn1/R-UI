import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import onlineTheme from "./online";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  p,h1,h2,h3,span{
  font-family:${onlineTheme.font.family}
  }
`;
