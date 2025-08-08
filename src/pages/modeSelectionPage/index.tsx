import { Link, useNavigate } from "react-router-dom";
import { StyledModeSelectionPage } from "./styled";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import { Button } from "../../components/button";

export const ModeSelectionPage = () => {
    const navigate = useNavigate();

    const exit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };
   
    return (
        <StyledModeSelectionPage>
            <nav>
                <div className="img">
                    <Link to={"/"}>
                        <img src={betinha} alt="Imagem do logo" onClick={() => navigate("/")}/>
                    </Link>
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>

            <div className="container">
                <h1>Escolha o modo de jogo:</h1>

                <Button buttonVariation="buttonHomePage" type="button" onClick={() => navigate("/Level")}>
                    Modo de Estudos
                </Button>

                <Button buttonVariation="buttonHomePage" type="button">
                    Modo Desafio
                </Button>

                <Button buttonVariation="buttonExit" type="button" onClick={exit}>
                    Sair
                </Button>
            </div>
        </StyledModeSelectionPage>
    );
};
