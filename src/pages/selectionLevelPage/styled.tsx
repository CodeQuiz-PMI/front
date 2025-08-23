import styled from "styled-components";

export const StyledSelectionLevelPage = styled.main`
      
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        padding-top:20px;

        .containerCoin {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding-right: 30px;

            .coins {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                
                background-color: var(--surface-color);
                
                padding: 10px;
                
                border: 1px solid transparent;
                border-radius: var(--border-radius-sm);
                
                color: var(--primary-color);
                
                font-family: var(--main-font);
                font-size: var(--font-size-xxl);
                font-style: normal;
                font-weight: var(--font-weight-normal);
                
                width: 120px;
            }
        }

        h1{
            color: var(--primary-color-light);
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            font-family: var(--main-font);
            font-size: var(--font-size-xxxxxl);
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }

        ul{
            display: flex; 
            align-items: center;
            justify-content: center; 
            gap: 20px;
        
            .level-square{
                width: 200px;
                height: 190px;
                
                border-radius: var(--border-radius-sm);
                border: 5px solid #2FFF00;
                
                display: flex; 
                align-items: center;
                justify-content: center;   

                button{
                    color: var(--primary-color-light);
                    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                    font-family: var(--main-font);
                    font-size: var(--font-size-xxxxxxl);
                    font-style: normal;
                    font-weight: var(--font-weight-normal);

                    width: 100%;
                    height: 100%;
                }
                
                background: #294623;
                
                &:hover{
                    background: #287E15;
                }
            }

            .level-square.isAnswered {
                background: #287E15;
            }
            
            .level-square.locked {
                opacity: 0.4;
                cursor: not-allowed;
                pointer-events: none;
            }
        }
    }

    .back{
        display: flex;
        align-items: center;
        justify-content: center;

        padding-top: 20px;

        button{
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