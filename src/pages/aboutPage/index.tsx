import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyleAboutPage } from "./styled";

import betinha from "../../assets/assetsV2/betinhalogo.svg";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    const [hasToken, setHasToken] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(!!token);
    }, []);

    const handleLogin = () => {
        if (hasToken) {
            navigate("/Mode");
        } else {
            navigate("/");
        }
    };

    return (
        <StyleAboutPage>
            <nav>
                <div className="img">
                    <img src={betinha} alt="Imagem do logo"  onClick={handleLogin}/>
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>
            <section className="title">
                <h1>
                    O que é o CodeQuiz?
                </h1>
            </section>

            <article>
                <ul className="text">
                    <li>
                        Sou um jogo interativo que transforma o aprendizado de lógica de programação em uma jornada divertida e acessível.
                    </li>
                    <li>
                        Combino perguntas envolventes com desafios práticos de código, estimulando o raciocínio e a criatividade.
                    </li>
                    <li>
                        O jogador progride respondendo questões teóricas e resolvendo problemas em um terminal de código integrado ao jogo.
                    </li>
                    <li>
                        Com foco em aprendizado progressivo, os desafios evoluem do básico ao avançado de forma natural.
                    </li>
                    <li>
                        Tudo direto do navegador, sem precisar instalar nada.
                    </li>
                </ul>
            </article>

            <div className="menu">
                <Button
                    buttonVariation="buttonExit"
                    type="button"
                    onClick={handleLogin}
                >
                    Voltar
                </Button>
            </div>
        </StyleAboutPage>
    );
};
