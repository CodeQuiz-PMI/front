import styled from "styled-components";

export const QuestionPageStyled = styled.main`
  align-items: center;
  font-family: var(--main-font);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 30px 0px 30px;

    h1 {
      color: var(--primary-color-light);
      text-align: center;
      font-family: var(--main-font);
      font-size: var(--font-size-xxxxxll);
      font-style: normal;
      font-weight: var(--font-weight-normal);
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 50px;
    padding: 0px 80px;

    .text {
      padding: 0px 45px;

      p,
      ul,
      li,
      code,
      pre,
      strong,
      h3 {
        color: var(--primary-color-light);
        font-family: var(--second-font);
        font-size: var(--font-size-lg);
        font-style: normal;
        font-weight: var(--font-weight-normal);
      }

      ul {
        list-style: disc;
        padding-left: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      li {
        margin-bottom: 6px;
      }

      code {
        padding: 2px 4px;
        border-radius: 4px;
        color: var(--primary-color-light);
        font-family: var(--main-font);
        font-size: var(--font-size-xl);
        font-style: normal;
        font-weight: var(--font-weight-normal);
      }

      pre {
        background-color: rgba(0, 128, 0, 0.1);
        padding: 10px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 10px 0 10px 0;
      }
    }

    .question {
      border-top: 2px solid green;
      margin-top: 10px;

      h2 {
        color: var(--primary-color-light);
        font-family: var(--second-font);
        font-size: var(--font-size-xl);
        font-style: normal;
        font-weight: var(--font-weight-normal);
      }

      form {
        padding: 5px 45px;

        h2,
        p,
        strong,
        code,
        li,
        label span {
          color: var(--primary-color-light);
          font-family: var(--second-font);
          font-size: var(--font-size-lg);
          font-style: normal;
          font-weight: var(--font-weight-normal);
        }

        ul {
          list-style: disc;
          padding-left: 30px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        code {
          padding: 2px 4px;
          border-radius: 4px;
          color: var(--primary-color-light);
          font-family: var(--main-font);
          font-size: var(--font-size-lg);
          font-style: normal;
          font-weight: var(--font-weight-normal);
        }

        pre {
          background-color: rgba(0, 128, 0, 0.1);
          padding: 10px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 10px 0 10px 0;
        }

        label {
          font-family: var(--main-font);
          display: block;
          padding: 10px;
          margin-bottom: 10px;
          border: 2px solid green;
          border-radius: 8px;
          transition: 0.3s ease;
        }

        label:hover {
          background-color: rgba(0, 128, 0, 0.1);
        }

        label.selected {
          background-color: green;
          color: white;
        }

        input[type="radio"] {
          margin-right: 10px;
          accent-color: green;
          display: none;
        }

        textarea {
          width: 100%;
          background-color: rgba(18, 18, 18, 0.71);
          margin-top: 10px;
          padding: 10px;
          font-family: var(--main-font);
          font-size: 16px;
          border: 2px solid green;
          border-radius: 8px;
          resize: vertical;
          color: var(--primary-color-light);
          resize: none;
        }
      }

      button {
        width: 200px;
        height: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 10px;
        border: 1px solid #2fff00;

        color: #2fff00;
        text-align: center;
        font-family: "Jersey 25";
        font-size: 36px;
        font-style: normal;
        font-weight: 400;

        background-color: rgba(47, 255, 0, 0.1);

        &:hover {
          background-color: rgba(137, 255, 63, 0.5);
        }
      }
    }
  }
`;
