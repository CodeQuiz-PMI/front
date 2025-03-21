import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
        font-family: 'Jersey 10', sans-serif;
        font-weight: 400;
        font-style: normal;
                
        background-color: #121212;
        color: #88FF3F;
    }

    ul{
        list-style: none;
    }

`;
