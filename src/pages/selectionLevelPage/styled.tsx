import styled from "styled-components";

export const StyledSelectionLevelPage = styled.main`
    nav {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: var(--nav-background);
    border-bottom: #2FFF00 2px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .img{
        width: 96px;
        height: auto;
        padding-left: 20px;
    }

    .nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 20px;
        padding-right: 20px;
        a {
            width: auto;
            text-decoration: none;
            color: var(--primary-color-light);
            font-family: var(--main-font);
            font-size: var(--font-size-xxl);
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }
    }
  }
    
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        padding-top:20px;

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
                
                color: var(--primary-color-light);
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: var(--main-font);
                font-size: var(--font-size-xxxxxxl);
                font-style: normal;
                font-weight: var(--font-weight-normal);
                
                background: #294623;
                
                &:hover{
                    background: #287E15;
                    cursor: pointer;
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
    }
`;