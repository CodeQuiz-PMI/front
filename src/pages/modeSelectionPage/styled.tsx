import styled from "styled-components";

export const StyledModeSelectionPage = styled.main`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        padding-top: 40px;
        
        height: 500px;

        .buttonHomePage{
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
                background-color: rgba(137, 255, 63, 0.5);
            }
        }
        
        .buttonExit{
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
                background-color: rgba(137, 255, 63, 0.5);
            }
        }
    }
`;