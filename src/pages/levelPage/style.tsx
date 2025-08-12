import styled from "styled-components";

export const StyleLevelPage = styled.main`
    nav {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: #2fff0026;
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
            color: #2FFF00;
            font-family: "Jersey 25";
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
        }
    }
  }
    
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .config {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
        img {
          border: 0px solid transparent;
          border-radius: 50%;
          background-color: rgba(137, 255, 63, 0.5);
        }
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      h1 {
        font-size: 30px;
        font-family: "Space Mono";
      }

      p {
        font-size: 20px;
        font-family: "Space Mono";
        text-align: center;
      }
    }
  }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;

        h1{
            color: #2FFF00;
            font-family: "Jersey 25";
            font-size: 96px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        div {
            display: flex;
            gap: 10px;
        }
    }

  .listCards {
    padding-left: 54px;
    padding-right: 54px;
    padding-bottom: 30px;

    display: flex;
    justify-content: center;


    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 15px;

      max-width: 70%;
    }

    @media (max-width: 1024px) {
        ul {
            max-width: 100%;
        }
    }
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

`;
