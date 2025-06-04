import { useState } from "react";
import { Button } from "../../components/button";
import { StyledLoginPage } from "./styled";
import googleImg from "../../assets/googleImg.svg";
import gitImg from "../../assets/gitImg.svg";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export const RegisterPage = () => {
    const { register } = useApp();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(name, email, password);
            navigate("/Login");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError("Falha no cadastro. Tente novamente.");
        }
    };

    return (
        <StyledLoginPage>
            <div className="title">
                <h1>Bem-vindo ao <span>CodeQuiz!</span></h1>
                <h2>Entre para salvar seu progresso e desafiar seus conhecimentos!</h2>
            </div>

            <div className="container">
                <form className="loginForm" onSubmit={handleRegister}>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}

                    <div className="socialIcons">
                        <img src={gitImg} alt="Login com GitHub" />
                        <img src={googleImg} alt="Login com Google" />
                    </div>

                    <Button buttonVariation="type2" type="submit">
                        Jogar
                    </Button>
                </form>

                <div className="bottomRight">
                    <Button buttonVariation="type4" type="button" onClick={() => navigate("/Login")}>
                        Voltar
                    </Button>
                </div>
            </div>
        </StyledLoginPage>
    );
};
