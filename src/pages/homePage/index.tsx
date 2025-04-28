import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { HomeStyled } from "./style";

export const HomePage = () => {

    const navigate = useNavigate();

    return (
        <HomeStyled>
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
                <Button buttonVariation="type1" type="button" onClick={() => navigate("/Login")}>
					Jogar Agora
                </Button>

                <Button buttonVariation="type3" type="button" onClick={() => navigate("/Game")}>
					Continuar
                </Button>

                <Button buttonVariation="type2" type="button" onClick={() => navigate("/About")}>
					Sobre o Jogo
                </Button>

                <Button buttonVariation="type2" type="button" onClick={() => navigate("/Configurations")}>
					Configurações
                </Button>
            </div>
        </HomeStyled>
    );
};
