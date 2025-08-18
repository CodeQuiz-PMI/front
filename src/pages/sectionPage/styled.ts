import styled from "styled-components";

export const StyledSectionPage = styled.main`
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    h1 {
      color: var(--primary-color-light);
      font-family: var(--main-font);
      font-size: var(--font-size-xxxxl);
      font-style: normal;
      font-weight: var(--font-weight-normal);
    }

    div {
      display: flex;
      gap: 10px;
    }

    .containerCoin {
      display: flex;
      justify-content: flex-end;

      .coins {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        background-color: var(--surface-color);

        padding: 10px;

        border: 1px solid transparent;
        border-radius: var(--border-radius-sm);

        color: var(--primary-color);

        font-family: var(--main-font);
        font-size: var(--font-size-xxl);
        font-style: normal;
        font-weight: var(--font-weight-normal);

        width: 120px;
      }
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
