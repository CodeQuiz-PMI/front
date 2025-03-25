import { Button } from "../../components/button";
import { HomeStyled } from "../homePage/style";

export const About = () => {
    return (
        <HomeStyled>
            <div className="title">
                <h1>O que é o CodeQuiz</h1>
            </div>
            <div className="text">
                <p>
                    O codeQuiz é um jogo interativo de perguntas e desafios de código, projetado para ensinar lógica de programação de forma divertida e acessível.
                </p>
                <p>
                    Um jogo que combina perguntas e respostas com desafios práticos de programação.
                </p>
                <p>
                    O jogador avança respondendo questões teóricas e resolvendo problemas em um terminal de código integrado.
                </p>
                <p>
                    Focado em aprendizado progressivo, começando do básico ao avançado.
                </p>
                <p>
                    Sem necessidade de instalação – jogável direto no navegador.
                </p>
            </div>
            <div className="menu">
                <Button 
                    buttonVariation="type1" 
                    type="button" 
                    onClick={() => (window.location.href = "/")}
                >
          Voltar
                </Button>
            </div>
        </HomeStyled>
    );
};
