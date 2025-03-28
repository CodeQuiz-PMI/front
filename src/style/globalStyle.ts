import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
        font-family: 'Jersey 10', sans-serif;
        font-weight: 400;
        font-style: normal;
                
        color: #88FF3F;
		}
		
	body{
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #121212;
	}
	main {
		width: 1440px;
		display: flex;
		flex-direction: column;
	}

    ul{
        list-style: none;
    }

`;
