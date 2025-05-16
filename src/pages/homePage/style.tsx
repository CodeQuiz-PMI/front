import styled from "styled-components";

export const HomeStyled = styled.main`
  align-items: center;

  .title {
    h1 {
      display: flex;
      justify-content: center;
      font-size: 80px;
      color: rgba(136, 255, 63, 1);
      text-shadow: 0px 0px 30px rgba(136, 255, 63, 1);
    }
    h2 {
      font-size: 40px;
      font-family: "Space Mono";
    }
    margin-bottom: 20px;
  }
  .text {
    margin-bottom: 20px;
    p {
        font-size: 20px;
      font-family: "Space Mono";
      text-align: center;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    buttom:hover {
      background-color: rgba(137, 255, 63, 0.15);
      cursor: pointer;
    }
  }
`;
