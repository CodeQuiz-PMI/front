import styled from "styled-components";

export const HomeStyled = styled.main`
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 50px;

        img {
            width: 610px;
            height: 200px;        
        }

        .buttons{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;

            padding-top: 20px;

            button{
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
        }
    }
`;
