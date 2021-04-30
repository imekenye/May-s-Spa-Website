import React from "react"
import { createGlobalStyle } from "styled-components"
import { normalize } from 'styled-normalize'

import "@fontsource/playfair-display/400.css"
import "@fontsource/ubuntu/400.css"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
    max-width: 1140px;
    margin: 0 auto;
    font-family: 'Ubuntu', sans-serif;
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
`
export default function Layout({ children }) {
    return (
        <React.Fragment>
            <GlobalStyle theme="purple" />
            {children}
        </React.Fragment>
    )
}
