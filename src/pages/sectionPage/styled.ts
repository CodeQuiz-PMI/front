import styled from "styled-components";

export const StyledSectionPage = styled.main`
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
        font-size: 50px;
      }

      p {
        font-size: 25px;
        text-align: center;
      }
    }
  }

  .progress {
    display: flex;
    align-items: center;
    height: 500px;
    justify-content: space-evenly;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
