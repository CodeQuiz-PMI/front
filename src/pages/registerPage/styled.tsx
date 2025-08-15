import styled from "styled-components";
export const StyledLoginPage = styled.main`
    nav {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: var(--nav-background);
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
            color: var(--primary-color-light);
            font-family: var(--main-font);
            font-size: var(--font-size-xxl);
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }
    }
  }

    .navigate{
        img{
            width: 70px;
        }
    }

    .title {
        font-family: var(--main-font);
        color: var(--primary-color-light);
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: var(--font-size-xxxxl);
            text-align: center;
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }

    }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding-top: 20px;

    .loginForm {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 500px;

        .input {
            display:flex;
            flex-direction: column;
            gap:5px;

            label {
                font-size: 20px;
                font-family: var(--main-font);   
            }

            input {
                width: 100%;
                height: 45px;
                padding: 10px;
                font-size: 20px;
                border: 1px solid transparent;
                border-radius: 10px;
                background: rgba(217, 217, 217, 0.15);
                color: var(--primary-color-light);
                font-family: var(--main-font), sans-serif;
            }

            input::placeholder {
                color: var(--primary-color-light);
            }
        }

        .inputs{
            display: flex;
            justify-content: space-between;
        }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        font-family: var(--main-font);
      }
    }

    .button{
        display: flex;
        align-items: center;
        justify-content: center;
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
`;
