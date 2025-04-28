import { Button } from "../../components/button";
import { StyledLoginPage } from "./styled";

import googleIgm from "../../assets/googleImg.svg";
import gitImg from "../../assets/gitImg.svg";
import { useNavigate, Link } from "react-router-dom"; // <- Aqui está o Link

export const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <StyledLoginPage>
            <div className="title">
                <h1>Bem-vindo ao CodeQuiz!</h1>
                <h2>Entre para salvar seu progresso e desafiar seus conhecimentos!</h2>
            </div>

            <div className="container">
                <form className="loginForm">
                    <label htmlFor="email">Email ou Nome</label>
                    <input type="email" id="email" placeholder="Digite seu email" />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />

                    <div className="links">
                        <a href="#" className="link">
                            Esqueceu sua senha?
                        </a>
                        <Link to="/register" className="link">
                            Criar conta
                        </Link>
                    </div>

                    <div className="socialIcons">
                        <img src={gitImg} alt="" />
                        <img src={googleIgm} alt="" />
                    </div>
                    <Button buttonVariation="type2" type="submit" onClick={() => navigate("/Game")}>
                        Jogar
                    </Button>
                </form>

                <div className="bottomRight">
                    <Button buttonVariation="type2" type="button" onClick={() => navigate("/Game")}>
                        Modo Visitante
                    </Button>
                    <Button buttonVariation="type2" type="button" onClick={() => navigate("/")}>
                        Voltar
                    </Button>
                </div>
            </div>
        </StyledLoginPage>
    );
};
