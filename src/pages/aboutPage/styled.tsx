import styled from "styled-components";

export const StyleAboutPage = styled.main`
    nav {
        width: 100%;
        height: 140px;
        padding: 10px;
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
            justify-content: flex-end;
            gap: 20px;
            padding-right: 20px;
            a {
                width: auto;
                text-decoration: none;
                color: #2FFF00;
                font-family: "Jersey 25";
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
            }
        }
    }

    section{
        padding-left: 50px;
        padding-top: 50px;

        h1 {
            color: #2FFF00;
            font-family: "Jersey 25";
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
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
                color: #2FFF00;
                font-family: "Space Mono";
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }
                
    .menu {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;