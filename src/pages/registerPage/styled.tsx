import styled from "styled-components";
export const StyledLoginPage = styled.main`
    nav {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: #2fff0026;
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
            color: #2FFF00;
            font-family: "Jersey 25";
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
        }
    }
  }

    .navigate{
        img{
            width: 70px;
        }
    }

    .title {
        font-family: "Jersey 25", sans-serif;

        color: #2FFF00;
            h1 {
                font-size: 55px;
                text-align: center;
                font-style: normal;
                font-weight: 400;
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
                font-family: "Jersey 25", sans-serif;   
            }

            input {
                width: 100%;
                height: 45px;
                padding: 10px;
                font-size: 20px;
                border: 1px solid transparent;
                border-radius: 10px;
                background: rgba(217, 217, 217, 0.15);
                color: #88ff3f;
                font-family: "Jersey 25", sans-serif;
            }

            input::placeholder {
                color: #88ff3f;
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
        font-family: "Space Mono";
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
