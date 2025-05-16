import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyleAboutPage } from "./styled";

export const AboutPage = () => {

    const navigate = useNavigate();

    return (
        <StyleAboutPage>
            <div className="title">
                <h1>O que é o <span>CodeQuiz</span>:</h1>
            </div>
            <p>
                O codeQuiz é um jogo interativo de perguntas e desafios de código, projetado para ensinar lógica de programação de forma divertida e acessível.
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
            </ul>
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
