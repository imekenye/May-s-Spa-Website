import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import "@fontsource/playfair-display/400.css";
import "@fontsource/ubuntu/400.css";
import { theme } from "../../theme/theme";
import Nav from "./Nav";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
    font-family: 'Ubuntu', sans-serif;
  }
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  
 h1,h2,h3,h4,h5,h6 {
    margin:0;
  }
   h1{
     font-family: 'Playfair Display', serif;
   }
   p{
     font-family: 'Ubuntu', sans-serif;
   }
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
