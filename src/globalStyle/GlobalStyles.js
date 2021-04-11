import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Work Sans", sans-serif;
  }
  
  body {
    font-family: MyriadPro, Open sans, Verdana;
  }
  
  html {
    width: 100%;
  }
  h1{
    font-family: "Oswald", sans-serif;
  }
  
  `;

export default GlobalStyle;
