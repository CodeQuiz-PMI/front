import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./types";

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
        switch (buttonVariation) {
            case "buttonHomePage":
                return css`
                width: 470px;
                height: 75px;

                filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

                color: #2FFF00;
                font-size: 40px;
                font-family: "Jersey 25";
                
                border-radius: 10px;
                border: 1px solid transparent;

                background-color: rgba(47, 255, 0, 0.15);  
                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
            case "buttonLoginPage":
                return css`
                width: 371px;
                height: 76px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 1px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;

                background-color: rgba(47, 255, 0, 0.1);  

                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
            case "buttonExit":
                return css`
                width: 250px;
                height: 50px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 1px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;

                background-color: rgba(47, 255, 0, 0.1);  

                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
            case "buttonImg":
                return css`
                width: 80px;
                height: 50px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                

                border: 1px solid transparent;
            
                background-color: #2A2A2A;  
                cursor: pointer;

        `;
            case "buttonImg2":
                return css`
                    width: 60px;
                    height: 50px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    

                    border: 1px solid transparent;
                
                    background-color: #2A2A2A;
                    cursor: pointer;
            `;
            case "buttonCardSection":
                return css`
                    width: 234px;
                    height: 47px;

                    color: #2FFF00;
                    text-align: center;
                    font-family: "Jersey 25";
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    
                    border-radius: 5px;
                    border: 1px solid transparent; 
                    background: rgba(0, 0, 0, 0.25);

                    &:hover {
                        cursor: pointer;
                        background-color: rgba(137, 255, 63, 0.5);
                    }
            `;
            case "buttonModalRanking":
                return css`
                    width: 100px;
                    height: 100px;

                    padding: 10px;

                    border-radius: 10px;
                    border: 5px solid #2B4E23;

                    cursor: pointer;
                    background-color: #2FFF00;
                `;
            case "buttonModalStore":
                return css`
                    width: 100px;
                    height: 75px;

                    padding: 10px;

                    border-radius: 10px;
                    border: 5px solid #2B4E23;

                    cursor: pointer;
                    background-color: #2FFF00;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                `;
            case "buttonExit2":
                return css`
                width: 200px;
                height: 50px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 1px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;

                background-color: rgba(47, 255, 0, 0.1);  

                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
            case "buttonConfigPage":
                return css`
                width: 100%;
                height: 40px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 2px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;

                background-color: #4A4A4A;  

                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
            case "buttonConfigPageStore":
                return css`
                width: 100%;
                height: 61px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 2px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 20px;
                font-style: normal;
                font-weight: 400;

                background-color: #4A4A4A;  

                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
            case "buttonModalHint":
                return css`
                width: auto;
                height: 50px;

                padding: 10px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 1px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;
                
                background: #214419;  

                &:hover {
                    cursor: pointer;
                    background-color: rgba(137, 255, 63, 0.5);
                }
        `;
        }
    }}
`;
