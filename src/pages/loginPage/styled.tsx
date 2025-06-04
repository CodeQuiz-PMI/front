import styled from "styled-components";
export const StyledLoginPage = styled.main`
  gap: 90px;
  .title {
    h1 {
      font-size: 40px;
      color: #88ff3f;
      font-family: "Space Mono";
      span {
        font-family: "Jersey 10", sans-serif;
        font-size: 60px;
        text-shadow: 0px 0px 30px #88ff3f;
      }
    }

    h2 {
      font-size: 25px;
      font-family: "Space Mono";
    }

    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .loginForm {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 304px;

      label {
        font-size: 20px;
        font-family: "Space Mono";
      }

      input {
        width: 100%;
        height: 45px;
        padding: 10px;
        font-size: 20px;
        background-color: transparent;
        border: 1px solid #88ff3f;
        border-radius: 10px;
        color: #88ff3f;
        font-family: "Space Mono";
      }

      input::placeholder {
        color: #88ff3f;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        font-family: "Space Mono";
      }
    }

    .socialIcons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      img {
        width: 60px;
      }
    }

    .bottomRight {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
  }
`;
