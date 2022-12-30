import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    overflow: auto;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${(props) => props.theme["gray-100"]};
    overflow-x: hidden;

  }
  
  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(98, 95, 95, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(93, 87, 87, 0.4);
    -webkit-box-shadow: inset 0 0 6px rgba(93, 87, 87, 0.4);
  }
  
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(93, 87, 87, 0.4);
  }
`;
