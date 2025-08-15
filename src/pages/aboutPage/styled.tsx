import styled from "styled-components";

export const StyleAboutPage = styled.main`
    nav {
        width: 100%;
        height: 100px;
        padding: 10px;
        background: var(--nav-background);
        border-bottom: var(--primary-color-light) 2px solid;
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
                font-family: var(--main-font);
                font-size: var(--font-size-xl);
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
    }

`;