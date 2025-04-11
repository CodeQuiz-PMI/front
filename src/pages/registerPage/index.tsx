import { Button } from "../../components/button";
import { StyledLoginPage } from "./styled";

import googleIgm from "../../assets/googleImg.svg";
import gitImg from "../../assets/gitImg.svg";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <StyledLoginPage>
            <div className="title">
                <h1>Bem-vindo ao CodeQuiz!</h1>
                <h2>Entre para salvar seu progresso e desafiar seus conhecimentos!</h2>
            </div>

            <div className="container">
                <form className="loginForm">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Digite seu nome" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email" />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />

                    <div className="socialIcons">
                        <img src={gitImg} alt="Login com GitHub" />
                        <img src={googleIgm} alt="Login com Google" />
                    </div>

                    <Button buttonVariation="type2" type="submit" onClick={() => navigate("/Game")}>
                        Jogar
                    </Button>
                </form>

                <div className="bottomRight">
                    <Button buttonVariation="type2" type="button" onClick={() => navigate("/")}>
                        Voltar
                    </Button>
                </div>
            </div>
        </StyledLoginPage>
    );
};
