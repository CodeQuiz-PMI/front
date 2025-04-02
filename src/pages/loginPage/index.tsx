import { Button } from "../../components/button";
import { StyledLoginPage } from "./styled";

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <div className="container">
                <div className="title-box">
                    <h1>Bem-vindo ao CodeQuiz!</h1>
                    <p>Entre para salvar seu progresso e desafiar seus conhecimentos!</p>
                </div>

                <div className="login-box">
                    <label htmlFor="email">Email ou Nome</label>
                    <input type="email" id="email" placeholder="Digite seu email" />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />

                    <div className="links">
                        <a href="#" className="link">Esqueceu sua senha?</a>
                        <a href="#" className="link">Criar conta</a>
                    </div>

                    <div className="social-icons">
                        <Button buttonVariation="type2" type="button">
                            Google
                        </Button>
                        <button className="icon-btn">
                            <img src="google.png" alt="Google" />
                        </button>
                        <button className="icon-btn">
                            <img src="github.png" alt="GitHub" />
                        </button>
                    </div>
                </div>

                <button className="play-btn">Jogar</button>

                <div className="bottom-right">
                    <button className="small-btn">Modo Visitante</button>
                    <button className="small-btn">Voltar</button>
                </div>
            </div>
        </StyledLoginPage>
    );
};