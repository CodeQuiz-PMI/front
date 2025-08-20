import styled from "styled-components";

export const ChallengeQuestionPageStyled = styled.main`
    nav {
        width: 100%;
        height: 100px;
        padding: 10px;
        background: #941515;
        border-bottom: #FFFFFF 2px solid;
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
                color: var(--primary-color-light);
                font-family: var(--main-font);
                font-size: var(--font-size-xxl);
                font-style: normal;
                font-weight: var(--font-weight-normal);
            }
        }
    }

.container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 10px;
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
        color: white;
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
        color: white;
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
      border-top: 2px solid white;
      margin-top: 10px;

      h2 {
        color: white;
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
          color: white;
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
          color: white;
          font-family: var(--main-font);
          font-size: var(--font-size-lg);
          font-style: normal;
          font-weight: var(--font-weight-normal);
        }

        pre {
          background-color: rgba(146, 146, 146, 0.37);
          padding: 10px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 10px 0 10px 0;
        }

        label {
          font-family: var(--main-font);
          display: block;
          padding: 5px;
          margin-bottom: 10px;
          border: 2px solid white;
          border-radius: 8px;
          transition: 0.3s ease;
        }

        label:hover {
          background-color: rgba(218, 218, 218, 0.4);
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
          color: white;
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
        border: 1px solid white;

        color: white;
        text-align: center;
        font-family: "Jersey 25";
        font-size: 36px;
        font-style: normal;
        font-weight: 400;

        background-color: rgba(146, 146, 146, 0.37);

        &:hover {
          background-color: rgba(218, 218, 218, 0.4);
        }
      }
    }
  }
`;
