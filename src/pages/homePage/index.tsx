import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomeStyled } from "./style";

import codequiz from "../../assets/assetsV2/CodeQuiz.svg";
import { NavBar } from "../../components/navbar";
import { useApp } from "../../context/AppContext";

import betinha from "../../assets/assetsV2/betinha.png";

export const HomePage = () => {
    const navigate = useNavigate();
    const [hasToken, setHasToken] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);

    const { playBackgroundMusic } = useApp();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(!!token);
        const welcome = sessionStorage.getItem("wellcomeShown");
        if (!welcome) {
            setShowWelcome(true);
            sessionStorage.setItem("wellcomeShown", "true");
        }
    }, [playBackgroundMusic]);

    const handleLogin = () => {
        if (hasToken) {
            navigate("/Mode");
        } else {
            navigate("/Login");
        }
    };

    const handleCloseModal = () => {
        setShowWelcome(false);
        playBackgroundMusic();
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
            <NavBar/>
            
            <div className="menu">
                <img src={codequiz} alt="Logo do CodeQuiz" />
                <div className="buttons">
                    <button className="buttonHomePage" type="button" onClick={handleLogin}>
                        Jogar Agora
                    </button>

                    <button className="buttonHomePage" type="button" onClick={handleContinue}>
                        Continuar
                    </button>
                </div>
            </div>
            {showWelcome && (
                <div className="modal">
                    <div className="modal-content">
                        <div style={{ padding: "0px 20px 40px" }}>
                            <img src={betinha} alt="Imagem do logo" style={{width: "80px"}}/>
                            <h2 
                                style={{ fontSize: "45px", fontWeight: "400", marginBottom: "20px" }}
                            >
                                Bem-vindo ao CodeQuiz!
                            </h2>
                            <p style={{ fontSize: "20px", marginBottom: "20px", fontFamily: "Space Mono" }}>
                                Aqui você aprende <strong>programação em Python</strong> de forma prática e divertida.
                            </p>
                            <p style={{ fontSize: "20px", fontFamily: "Space Mono" }}>
                                Responda desafios, conquiste pontos e evolua suas habilidades enquanto joga!
                            </p>
                            <p style={{ fontSize: "15px", fontFamily: "Space Mono", paddingTop: "20px"}}>
                                * O jogo possui música de fundo. Para ajustar o volume ou desligar, basta acessar as configurações após o login.
                            </p>
                        </div>
                        <button 
                            style={{
                                width: "150px", height: "80px",
                                padding: "10px", 
                                borderRadius: "10px", border: "5px solid #2FFF00", 
                                backgroundColor: "#2B4E23", 
                                display: "flex", alignItems: "center", justifyContent: "center", 
                                fontSize: "25px", color: "#2FFF00", 
                                position: "absolute", bottom: "-40px" 
                            }}
                            onClick={handleCloseModal}
                        >
                            Jogar!
                        </button>
                    </div>
                </div>
            )}
        </HomeStyled>
    );
};

