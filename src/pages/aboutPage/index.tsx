import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyleAboutPage } from "./styled";

import { NavBar } from "../../components/navbar";

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
            <NavBar />
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
                <button
                    className="buttonExit"
                    type="button"
                    onClick={handleLogin}
                >
                    Voltar
                </button>
            </div>
        </StyleAboutPage>
    );
};
