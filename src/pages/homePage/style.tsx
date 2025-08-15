import styled from "styled-components";

export const HomeStyled = styled.main`
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
        }
    }
`;
