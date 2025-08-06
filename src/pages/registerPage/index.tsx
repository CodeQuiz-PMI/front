import { useState } from "react";
import { Button } from "../../components/button";
import { StyledLoginPage } from "./styled";

import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import arrowLeft from "../../assets/ArrowLeft.svg";
import googleImg from "../../assets/googleImg.svg";
import gitImg from "../../assets/gitImg.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {
    const { register } = useApp();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("As senhas não coincidem!", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        try {
            await register(name, email, password);
            toast.success("Cadastro realizado com sucesso!", {
                position: "top-center",
                autoClose: 2000,
                onClose: () => navigate("/Login"),
            });
        } catch (err) {
            console.error(err);
            toast.error("Falha no cadastro. Tente novamente.", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <StyledLoginPage>
            <nav>
                <div className="img">
                    <Link to={"/"}>
                        <img src={betinha} alt="Imagem do logo" />
                    </Link>
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>

            <div className="navigate">
                <Link to="/login">
                    <img src={arrowLeft} alt="Voltar" />
                </Link>
            </div>

            <div className="title">
                <h1>Bem-vindo ao CodeQuiz!</h1>
            </div>

            <div className="socialIcons">
                <img src={gitImg} alt="Login com GitHub" />
                <img src={googleImg} alt="Login com Google" />
            </div>

            <div className="container">
                <form className="loginForm" onSubmit={handleRegister}>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

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

                    <div className="input">
                        <label htmlFor="confirmPassword">Confirme sua senha:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="button">
                        <Button buttonVariation="buttonLoginPage" type="submit">Jogar</Button>
                    </div>
                </form>

                <div className="bottomRight">
                    {/* Botão de voltar, se quiser reativar depois */}
                </div>
            </div>
        </StyledLoginPage>
    );
};
