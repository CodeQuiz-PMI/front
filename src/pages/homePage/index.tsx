import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomeStyled } from "./style";
import { Button } from "../../components/button";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import codequiz from "../../assets/assetsV2/CodeQuiz.svg";

export const HomePage = () => {
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
            navigate("/Login");
        }
    };

    const handleContinue = () => {
        if (hasToken) {
            navigate("/Mode");
        } else {
            toast.warn("Você precisa estar logado para continuar o jogo!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <HomeStyled>
            <nav>
                <div className="img">
                    <img src={betinha} alt="Imagem do logo" />
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>

            <div className="menu">
                <img src={codequiz} alt="Logo do CodeQuiz" />
                <div className="buttons">
                    <Button buttonVariation="buttonHomePage" type="button" onClick={handleLogin}>
                        Jogar Agora
                    </Button>

                    <Button buttonVariation="buttonHomePage" type="button" onClick={handleContinue}>
                        Continuar
                    </Button>
                </div>
            </div>
        </HomeStyled>
    );
};
