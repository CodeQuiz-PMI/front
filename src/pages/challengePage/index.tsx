import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import betinha from "../../assets/betinha2.svg";
import store from "../../assets/store2.svg";
import about from "../../assets/about2.svg";
import config from "../../assets/config2.svg";
import back2 from "../../assets/back2.svg";
import fire from "../../assets/fire.svg";
import fire2 from "../../assets/fire2.png";
import play from "../../assets/play.svg";
import info from "../../assets/Info.svg";

import { useApp, User } from "../../context/AppContext";
import { api } from "../../services/api";
import { StyledChallengePage } from "./style";

export const ChallengePage = () => {
    const navigate = useNavigate();

    const { getRanking } = useApp();

    const [showInfo, setShowInfo] = useState(false);
    const [showInfo2, setShowInfo2] = useState(false);
    const [rankingData, setRankingData] = useState<User[]>([]);

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const user = JSON.parse(userFromStorage);
            const fetchUser = async () => {
                const get = await api.get(`/users/${user.id}`);
                const userData = {
                    ...get.data,
                    id: get.data._id,
                };
                delete userData._id;

                localStorage.setItem("user", JSON.stringify(userData));
            };
            fetchUser();
        }
        const fetchRanking = async () => {
            try {
                const data = await getRanking();
                setRankingData(data);
            } catch (error) {
                console.error("Erro ao carregar ranking:", error);
            }
        };

        const infoShown = localStorage.getItem("challengePageInfoShown");

        if (!infoShown) {
            setShowInfo(true);
            localStorage.setItem("challengePageInfoShown", "true");
        }

        fetchRanking();
    }, [getRanking]);

    const exit = () => {
        navigate("/Mode");  
    };

    return (
        <StyledChallengePage>
            <nav>
                <div className="img">
                    <Link to="/">
                        <img src={betinha} alt="Imagem do logo" />
                    </Link>
                </div>
                <div className="nav">
                    <Link to="/About"><img src={about} alt="" /></Link>
                    <Link to="/Store"><img src={store} alt="" /></Link>
                    <Link to="/Configurations"><img src={config} alt="" /></Link>
                </div>
            </nav>

            <div className="Title">
                <h1>
                    Modo desafio 
                </h1>
                <img src={fire} alt="" />
            </div>

            <div className="container">
                <div className="containerBody">
                    <div className="info">
                        <img src={info} alt="" onClick={() => setShowInfo2(true)}/>
                    </div>
                    <div className="record" style={{
                        backgroundImage: `url(${fire2})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "200px",
                        height: "200px"
                    }}>
                        <h2>
                            Recorde
                        </h2>
                        <p>50</p>
                    </div>
                    <div className="ranking">
                        <h2>
                            Ranking dos Desafiados!
                        </h2>
                        <ul className="ranking-list">
                            {rankingData.map((player, index) => (
                                <li key={player._id}>
                                    <div>
                                        <span>{index + 1}. </span>
                                        <span className="player-name">{player.name}</span>
                                    </div>
                                    <span className="player-points">{player.totalPoints} pontos</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="buttons">
                    <button type="button">
                        <img src={back2} alt="Back" onClick={exit}/>
                    </button>
                    <button type="button">
                        <img src={play} alt="Back" onClick={() => navigate("/ChallengeQuestion")}/>
                    </button>
                </div>
            </div>

            {showInfo && (
                <div className="modal">
                    <div className="modal-content" style={{backgroundColor: "#393939", border: "2px solid white", color: "white"}}>
                        <div className="ranking-title">
                            <img src={fire} alt="Troféu" style={{width: "55px", height: "80px"}}/>
                            <h2 style={{color: "white"}}>Bem-vindo ao Modo Desafio do CodeQuiz!</h2>
                            <img src={fire} alt="Troféu" style={{width: "55px", height: "80px"}}/>
                        </div>
                        <div>
                            <ul style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <li>
                                    <p style={{textAlign: "justify"}}>
                                        É hora de colocar em prática tudo o que você aprendeu por aqui e mostrar do que é capaz! 
                                    </p>
                                </li>
                                <li>
                                    <p style={{textAlign: "justify"}}>
                                        Teste suas habilidades e acumule pontos para desbloquear recompensas na loja!
                                    </p>
                                    <p style={{textAlign: "justify"}}>
                                        Preparado(a)? Então respira fundo e bora começar! 
                                    </p>
                                </li>
                                <li>
                                    <p style={{textAlign: "justify"}}>
                                        Você vai ter 5 minutos para responder o máximo de perguntas possível, com níveis variados de dificuldade.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="ranking-buttons">
                            <button className="buttonModalRanking" type="button" onClick={exit} 
                                style={{height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#A13D00"}}
                            >
                                <img src={back2} alt="Back" />
                            </button>
                            <button className="buttonModalRanking" type="button" onClick={() => setShowInfo(false)}
                                style={{height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#A13D00"}}
                            >
                                <img src={play} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}           

            {showInfo2 && (
                <div className="modal">
                    <div className="modal-content" style={{backgroundColor: "#393939", border: "2px solid white", color: "white"}}>
                        <div className="ranking-title">
                            <img src={fire} alt="Troféu" style={{width: "55px", height: "80px"}}/>
                            <h2 style={{color: "white"}}>Bem-vindo ao Modo Desafio do CodeQuiz!</h2>
                            <img src={fire} alt="Troféu" style={{width: "55px", height: "80px"}}/>
                        </div>
                        <div>
                            <ul style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <li>
                                    <p style={{textAlign: "justify"}}>
                                        É hora de colocar em prática tudo o que você aprendeu por aqui e mostrar do que é capaz! 
                                    </p>
                                </li>
                                <li>
                                    <p style={{textAlign: "justify"}}>
                                        Teste suas habilidades e acumule pontos para desbloquear recompensas na loja!
                                    </p>
                                    <p style={{textAlign: "justify"}}>
                                        Preparado(a)? Então respira fundo e bora começar! 
                                    </p>
                                </li>
                                <li>
                                    <p style={{textAlign: "justify"}}>
                                        Você vai ter 5 minutos para responder o máximo de perguntas possível, com níveis variados de dificuldade.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="ranking-buttons">
                            <button className="buttonModalRanking" type="button" onClick={() => setShowInfo2(false)} 
                                style={{height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#A13D00"}}
                            >
                                <img src={back2} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}      
        </StyledChallengePage>
    );
};
