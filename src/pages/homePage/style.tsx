import styled from "styled-components";

export const HomeStyled = styled.main`
  align-items: center;

  nav {
    width: 100%;
    height: 165px;
    background: #2fff0026;
    border-bottom: #2FFF00 2px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .img{
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

    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 50px;

        img {
            width: 750px;
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
