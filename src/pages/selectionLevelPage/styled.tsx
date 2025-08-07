import styled from "styled-components";

export const StyledSelectionLevelPage = styled.main`
    nav {
        width: 100%;
        height: 140px;
        background: #2fff0026;
        border-bottom: #2FFF00 2px solid;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .img{
            width: 140px;
            height: auto;
            padding-left: 20px;
        }

        .nav{
            display: flex;
            flex-direction: row;
            gap: 20px;
            padding-right: 20px;
            a {
                text-decoration: none;
                color: #2FFF00;
                font-family: "Jersey 25";
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
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
            color: #2FFF00;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            font-family: "Jersey 25";
            font-size: 96px;
            font-style: normal;
            font-weight: 400;
        }

        ul{
            display: flex; 
            align-items: center;
            justify-content: center; 
            gap: 20px;
        
            .level-square{
                width: 200px;
                height: 190px;
                
                border-radius: 10px;
                border: 5px solid #2FFF00;
                
                display: flex; 
                align-items: center;
                justify-content: center;   
                
                color: #2FFF00;
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: "Jersey 25";
                font-size: 128px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                
                background: rgba(47, 255, 0, 0.10);
                
                &:hover{
                    background: rgb(47 255 0 / 23%);
                    cursor: pointer;
                }
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