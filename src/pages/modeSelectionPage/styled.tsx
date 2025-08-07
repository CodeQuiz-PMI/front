import styled from "styled-components";

export const StyledModeSelectionPage = styled.main`
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

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        padding-top: 40px;
        
        height: 500px;
    }
`;