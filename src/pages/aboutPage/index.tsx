import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyleAboutPage } from "./styled";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <StyleAboutPage>
            <section className="title">
                <h1>
                    O que é o <span>CodeQuiz</span>:
                </h1>
            </section>

            <article>
                <p>
                    O <strong>CodeQuiz</strong> é um jogo interativo de perguntas e
                    desafios de código, projetado para ensinar lógica de programação de
                    forma divertida e acessível.
                </p>

                <ul className="text">
                    <li>
                        Um jogo que combina perguntas e respostas com desafios práticos de programação.
                    </li>
                    <li>
                        O jogador avança respondendo questões teóricas e resolvendo problemas em um terminal de código integrado.
                    </li>
                    <li>
                        Focado em aprendizado progressivo, começando do básico ao avançado.
                    </li>
                    <li>
                        Sem necessidade de instalação – jogável direto no navegador.
                    </li>
                    <li>
                        A estética visual em preto e verde neon foi inspirada nos clássicos terminais de computadores antigos, trazendo um toque retrô e nostálgico ao aprendizado.
                    </li>
                </ul>
            </article>

            <div className="menu">
                <Button
                    buttonVariation="type2"
                    type="button"
                    onClick={() => navigate("/")}
                >
                    Voltar
                </Button>
            </div>
        </StyleAboutPage>
    );
};
