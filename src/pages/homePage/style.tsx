import styled from "styled-components";

export const HomeStyled = styled.main`
  padding: 40px;

  .title {
    h1 {
      font-size: 80px;
      color: rgba(136, 255, 63, 1);
      text-shadow: 0px 0px 30px rgba(136, 255, 63, 1);
    }
    h2 {
      font-size: 40px;
    }
    margin-bottom: 20px;
  }
  .text {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;

    buttom:hover {
      background-color: rgba(137, 255, 63, 0.15);
      cursor: pointer;
    }
  }
`;
