import styled from "styled-components";
export const StyledLoginPage = styled.main`

    

    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        height: 100vh;
        width: 100vw;
        background-color: #1a1a1a;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        height: 85vh;
        background-color: #111;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 0 15px #0f0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }

    /* Centraliza título e descrição */
    .title-box {
        text-align: center;
        color: #0f0;
        font-size: 22px;
    }

    /* Login alinhado à esquerda, mas centralizado verticalmente */
    .login-box {
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    label {
        color: #0f0;
        font-size: 22px;
    }

    input {
        width: 320px;
        padding: 12px;
        background: transparent;
        border: 2px solid #0f0;
        color: #0f0;
        font-size: 18px;
        outline: none;
        border-radius: 10px;
    }

    input::placeholder {
        color: rgba(0, 255, 0, 0.7);
        font-size: 16px;
    }

    /* Links centralizados */
    .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 10px;
    }

    .link {
        color: #0f0;
        font-size: 18px;
        cursor: pointer;
        margin: 5px 0;
    }

    .link:hover {
        text-decoration: underline;
    }

    /* Ícones sociais (bolinhas médias) */
    .social-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
        width: 100%;
        margin-top: 15px;
    }

    .icon-btn {
        background: none;
        border: 2px solid #0f0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background 0.3s, transform 0.2s;
    }

    .icon-btn img {
        width: 30px;
        height: 30px;
        filter: drop-shadow(0px 0px 5px #0f0);
    }

    .icon-btn:hover {
        background: #0f0;
        transform: scale(1.1);
    }

    /* Botão jogar */
    .play-btn {
        position: absolute;
        left: 50px;
        bottom: 30px;
        width: 320px;
        padding: 14px;
        background: transparent;
        border: 2px solid #0f0;
        color: #0f0;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;
        transition: background 0.3s, color 0.3s;
    }

    .play-btn:hover {
        background: #0f0;
        color: #111;
    }

    /* Botões inferior direito */
    .bottom-right {
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .small-btn {
        padding: 12px 18px;
        border: 2px solid #0f0;
        background: transparent;
        color: #0f0;
        font-size: 18px;
        cursor: pointer;
        border-radius: 10px;
        transition: background 0.3s, color 0.3s;
    }

    .small-btn:hover {
        background: #0f0;
        color: #111;
    }
`;