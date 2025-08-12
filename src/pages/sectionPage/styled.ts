import styled from "styled-components";

export const StyledSectionPage = styled.main`
  nav {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: #2fff0026;
    border-bottom: #2fff00 2px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .img {
      width: 96px;
      height: auto;
      padding-left: 20px;
    }

    .nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 20px;
      padding-right: 20px;
      a {
        width: auto;
        text-decoration: none;
        color: #2fff00;
        font-family: "Jersey 25";
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    h1 {
      color: #2fff00;
      font-family: "Jersey 25";
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    div {
      display: flex;
      gap: 10px;
    }
  }

  .progress {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
  }

  .question-with-line {
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      width: 160px;
    }
  }

  .line-between {
    height: 5px;
    width: 40px;
    background-color: #294623;
    transition: background-color 0.3s ease;
    margin-bottom: 80px;
  }

  .line-between.answered {
    background-color: #2fff00;
  }
`;
