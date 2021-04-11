import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  body {
    font-family: MyriadPro, Open sans, Verdana;
  }
  
  html {
    width: 100%;
  }
  
  `;

export default GlobalStyle;
