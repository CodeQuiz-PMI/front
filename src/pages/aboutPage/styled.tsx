import styled from "styled-components";

export const StyleAboutPage = styled.main`
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;

    h1 {
      font-size: 40px;
      color: rgba(136, 255, 63, 1);
      font-family: "Space Mono";

      
      span{
        text-shadow: 0px 0px 30px rgba(136, 255, 63, 1);
      font-size: 60px;

      }
    }

    p {
        margin-top: 20px;
        font-family: "Space Mono", monospace;
        font-size: 20px;
    }

    .text{
        margin-top: 20px;
        padding-left: 70px;
        list-style: circle;
        li{
            font-family: "Space Mono", monospace;
            font-size: 20px;
        }
    }

    .menu {
        margin-top: 20px;

        display: flex;
        justify-content: flex-end;
    }

`;