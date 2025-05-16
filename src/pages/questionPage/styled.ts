import styled from "styled-components";

export const QuestionPageStyled = styled.main`
  align-items: center;
  font-family: "Space Mono";

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    h1 {
      text-align: center;
        font-family: "Space Mono", monospace;
    }

    div {
      display: flex;
      justify-content: flex-end;
      width: 35%;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 50px;

    .text {
       p,
      ul,
      li,
      code,
      pre,
      strong, h3, {
        font-family: "Space Mono", monospace;
        text-align: justify;
        font-size: 18px;
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
        font-size: 16px;
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
        font-family: "Space Mono", monospace;
		margin-bottom: 10px;
      }

      form {
        h2,
        p,
        strong,
        code, li, label span {
          font-family: "Space Mono", monospace;
          font-size: 18px;
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
          font-size: 16px;
        }

        pre {
          background-color: rgba(0, 128, 0, 0.1);
          padding: 10px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 10px 0 10px 0;
        }

        label {
          font-family: "Space Mono", monospace;
          display: block;
          padding: 10px;
          margin-bottom: 10px;
          border: 2px solid green;
          border-radius: 8px;
          cursor: pointer;
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
          font-family: "Space Mono", monospace;
          font-size: 16px;
          border: 2px solid green;
          border-radius: 8px;
          resize: vertical;
          color: #88ff3f;
          resize: none;
        }
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .modal-content {
      background-color: #121212;
      padding: 30px;
      border-radius: 8px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      h2 {
        font-family: "Space Mono", monospace;
      }
    }
  }

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
`;
