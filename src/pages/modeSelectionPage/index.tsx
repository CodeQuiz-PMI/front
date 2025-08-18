import { useNavigate } from "react-router-dom";
import { StyledModeSelectionPage } from "./styled";

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

                <button className="buttonHomePage" type="button" onClick={() => navigate("/Level")}>
                    Modo de Estudos
                </button>

                <button className="buttonHomePage" type="button">
                    Modo Desafio
                </button>

                <button className="buttonExit" type="button" onClick={exit}>
                    Sair
                </button>
            </div>
        </StyledModeSelectionPage>
    );
};
