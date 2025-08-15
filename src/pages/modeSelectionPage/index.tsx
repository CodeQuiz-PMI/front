import { useNavigate } from "react-router-dom";
import { StyledModeSelectionPage } from "./styled";

import { Button } from "../../components/button";
import { NavBar } from "../../components/navbar";

export const ModeSelectionPage = () => {
    const navigate = useNavigate();

    const exit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };
   
    return (
        <StyledModeSelectionPage>
            <NavBar/>

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
