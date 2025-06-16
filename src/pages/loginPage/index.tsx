import { useState } from "react";
import { Button } from "../../components/button";
import { StyledLoginPage } from "./styled";
// import googleImg from "../../assets/googleImg.svg";
// import gitImg from "../../assets/gitImg.svg";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export const LoginPage = () => {
    const { login } = useApp();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/Game");
        } catch (err) {
            console.error(err);
            setError("Falha no login. Verifique suas credenciais.");
        }
    };

    return (
        <StyledLoginPage>
            <div className="title">
                <h1>Bem-vindo ao <span>CodeQuiz!</span></h1>
                <h2>Entre para salvar seu progresso e desafiar seus conhecimentos!</h2>
            </div>

            <div className="container">
                <form className="loginForm" onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p style={{ color: "red", marginTop: "0.5rem", fontFamily: "Space Mono" }}>{error}</p>}

                    <div className="links">
                        {/* <a href="#" className="link">Esqueceu sua senha?</a> */}
                        <Link to="/register" className="link">Criar conta</Link>
                    </div>

                    {/* <div className="socialIcons">
                        <img src={gitImg} alt="GitHub login" />
                        <img src={googleImg} alt="Google login" />
                    </div> */}

                    <Button buttonVariation="type2" type="submit">Jogar</Button>
                </form>

                <div className="bottomRight">
                    {/* <Button buttonVariation="type2" type="button" onClick={() => navigate("/Game")}>
                        Modo Visitante
                    </Button> */}
                    <Button buttonVariation="type4" type="button" onClick={() => navigate("/")}>
                        Voltar
                    </Button>
                </div>
            </div>
        </StyledLoginPage>
    );
};
