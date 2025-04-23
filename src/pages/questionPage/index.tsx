import { Button } from "../../components/button";

import settings from "../../assets/Settings.svg";
import { QuestionPageStyled } from "./styled";
import { useState } from "react";

export const QuestionPage = () => {
    const [selected, setSelected] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Você escolheu: ${selected}`);
    };
    
    return (
        <QuestionPageStyled>
            <div className="header">
                <h1>O que é Python?</h1>
                <div>
                    <img src={settings} alt="settings" />
                </div>
            </div>

            <div className="container">
                <div className="text">
                    <p>
                        Python é uma linguagem de programação de alto nível, conhecida por
                        sua simplicidade e legibilidade. Criada por Guido van Rossum em
                        1991, Python é amplamente utilizada para desenvolvimento web,
                        ciência de dados, automação, inteligência artificial, jogos e muito
                        mais. Algumas características que tornam Python popular: Sintaxe
                        simples e intuitiva – Fácil de aprender para iniciantes. Código
                        limpo e legível – Menos uso de símbolos e palavras-chave claras.
                        Multiplataforma – Roda em Windows, macOS e Linux. Grande comunidade
                        – Muitas bibliotecas e suporte ativo. O primeiro código que todo
                        programador escreve em qualquer linguagem geralmente imprime uma
                        mensagem na tela. Em Python, isso pode ser feito com o comando
                        print(). print("Hello, World!") Explicação: A função print() exibe
                        um texto na tela. O texto deve estar entre aspas duplas ("") ou
                        simples (''). Saída no console: Hello, World!
                    </p>
                </div>

                <div className="question">
                    <h3>Qual destas opções imprime um texto na tela em Python?</h3>
                    <form onSubmit={handleSubmit}>
                        <label className={selected === "A" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="answer"
                                value="A"
                                checked={selected === "A"}
                                onChange={handleChange}
                            />
                                A) print("Olá, Mundo!")
                        </label>

                        <label className={selected === "B" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="answer"
                                value="B"
                                checked={selected === "B"}
                                onChange={handleChange}
                            />
                                B) "Olá, Mundo!"
                        </label>

                        <label className={selected === "C" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="answer"
                                value="C"
                                checked={selected === "C"}
                                onChange={handleChange}
                            />
                                C) console.log("Olá, Mundo!")
                        </label>

                        <label className={selected === "D" ? "selected" : ""}>
                            <input
                                type="radio"
                                name="answer"
                                value="D"
                                checked={selected === "D"}
                                onChange={handleChange}
                            />
                                D) console("Olá, Mundo!")
                        </label>

                        <Button type="submit" buttonVariation="type2">
                                Confirmar
                        </Button>
                    </form>
                </div>
            </div>
        </QuestionPageStyled>
    );
};
