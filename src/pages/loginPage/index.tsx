import { StyledLoginPage } from "./styled";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";

import arrowLeft from "../../assets/ArrowLeft.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../components/navbar";
import { useState } from "react";

export const LoginPage = () => {
    const { login } = useApp();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/Mode");
        } catch (err) {
            console.error(err);
            toast.error("Falha no login. Verifique suas credenciais.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <StyledLoginPage>
            <NavBar/>

            <div className="navigate">
                <Link to="/">
                    <img src={arrowLeft} alt="Voltar" />
                </Link>
            </div>

            <div className="title">
                <h1>Bem-vindo ao CodeQuiz!</h1>
                <h2>Entre para salvar seu progresso e desafiar seus conhecimentos!</h2>
            </div>

            <div className="socialIcons">
                {/* <img src={gitImg} alt="GitHub login" />
                <img src={googleImg} alt="Google login" /> */}
            </div>

            <div className="container">
                <form className="loginForm" onSubmit={handleLogin}>
                    <div className="input">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="links">
                        <Link to="/register" className="link">Criar conta</Link>
                        {/* <Link to="#" className="link">Esqueceu sua senha?</Link> */}
                    </div>

                    <div className="button">
                        <button className="buttonLoginPage" type="submit">Jogar</button>
                    </div>
                </form>

                <div className="buttons">
                </div>
            </div>
        </StyledLoginPage>
    );
};
