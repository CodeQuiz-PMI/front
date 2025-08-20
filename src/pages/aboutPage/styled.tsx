import styled from "styled-components";

export const StyleAboutPage = styled.main`
    section{
        padding-left: 50px;
        padding-top: 50px;

        h1 {
            color: var(--primary-color-light);
            font-family: var(--main-font);
            font-size: var(--font-size-xxxl);
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }
    }

    article{
        padding: 20px 70px 20px 50px;
        .text{
            margin-top: 20px;
            padding-left: 70px;
            list-style: circle;
            
            display: flex;
            flex-direction: column;
            gap: 10px;

            li{
                color: var(--primary-color-light);
                font-family: var(--second-font);
                font-size: var(--font-size-base2);
                font-style: normal;
                font-weight: var(--font-weight-normal);
            }
        }
    }
                
    .menu {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

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