// import codeQuizLogo from '../assets/CodeQuiz.svg'

import { Button } from "../button";
import { HomeStyled } from "./style";

export const Home = () => {
  return (
    <HomeStyled>
      {/* <img src={codeQuizLogo} className="logo" alt="codeQuiz logo" /> */}
      <div className="title">
        <h1>CodeQuiz</h1>
        <h2>Aprenda Programação Jogando!</h2>
      </div>
      <div className="text">
        <p>
          Desafie seus conhecimentos em lógica de programação e resolva desafios
          práticos em nosso terminal interativo!
        </p>
      </div>
      <div className="menu">
        <Button buttonVariation="type1" type="button">
          Jogar Agora
        </Button>

        <Button buttonVariation="type3" type="button">
          Continuar
        </Button>

        <Button buttonVariation="type2" type="button">
          Sobre o Jogo
        </Button>

        <Button buttonVariation="type2" type="button">
          Configurações
        </Button>
      </div>
    </HomeStyled>
  );
};
