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
        }
    }}
`;
