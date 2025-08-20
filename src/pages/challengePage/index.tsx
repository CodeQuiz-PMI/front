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
import heart from "../../assets/assetsV2/heart.svg";

import { User } from "../../context/AppContext";
import { api } from "../../services/api";
import { StyledChallengePage } from "./style";
import { toast } from "react-toastify";

export const ChallengePage = () => {
    const navigate = useNavigate();

    const [showInfo, setShowInfo] = useState(false);
    const [showInfo2, setShowInfo2] = useState(false);
    const [rankingData, setRankingData] = useState<User[]>([]);

    const [userRecord, setUserRecord] = useState<number>(0);
    const [userLifes, setUserLifes] = useState<number>(0);

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");

        const fetchUserData = async () => {
            if (userFromStorage) {
                const loggedUser = JSON.parse(userFromStorage);
                try {
                    const response = await api.get(`/users/${loggedUser.id}`);
                    const userData = {
                        ...response.data,
                        id: response.data._id,
                    };
                    delete userData._id;
                    delete userData.password;

                    setUserRecord(userData.record || 0);
                    setUserLifes(userData.lifes || 0);

                    localStorage.setItem("user", JSON.stringify(userData));
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error);
                }
            }
        };

        const fetchTop5Ranking = async () => {
            try {
                const response = await api.get("/users");
                const allUsers: User[] = response.data;

                const sortedUsers = allUsers.sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0));

                const top5 = sortedUsers.slice(0, 5);

                setRankingData(top5);
            } catch (error) {
                console.error("Erro ao carregar ranking:", error);
            }
        };

        fetchUserData();
        fetchTop5Ranking();

        const infoShown = localStorage.getItem("challengePageInfoShown");
        if (!infoShown) {
            setShowInfo(true);
            localStorage.setItem("challengePageInfoShown", "true");
        }
    }, []);

    const exit = () => {
        navigate("/Mode");
    };

    const handlePlayClick = async () => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) {
            toast.error("Erro: Usuário não encontrado. Por favor, faça login novamente.");
            return;
        }

        if (userLifes <= 0) {
            toast.error("Você não tem mais vidas para jogar o desafio!");
            return;
        }

        const loggedUser = JSON.parse(userFromStorage);
        const newLifeCount = userLifes - 1;

        try {
            const res = await api.patch(`/users/${loggedUser.id}`, { lifes: newLifeCount });
            const userData = {
                ...res.data,
                id: res.data._id,
            };
            delete userData._id;
            delete userData.password;

            setUserLifes(newLifeCount);

            localStorage.setItem("user", JSON.stringify(userData));

            navigate("/ChallengeQuestion");
        } catch (error) {
            console.error("Erro ao atualizar vidas:", error);
            toast.error("Não foi possível iniciar o desafio. Tente novamente.");
        }
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
                <h1>Modo desafio</h1>
                <img src={fire} alt="" />
            </div>

            <div className="container">
                <div className="containerBody">
                    <div className="lifes-counter">
                        <img src={heart} alt="Ícone de vidas" />
                        <span>{userLifes}</span>
                    </div>
                    <div className="info">
                        <img src={info} alt="" onClick={() => setShowInfo2(true)} />
                    </div>
                    <div className="record" style={{
                        backgroundImage: `url(${fire2})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "200px",
                        height: "200px"
                    }}>
                        <h2>Recorde</h2>
                        <p>{userRecord}</p>
                    </div>
                    <div className="ranking">
                        <h2>Ranking dos Desafiados!</h2>
                        <ul className="ranking-list">
                            {rankingData.map((player, index) => (
                                <li key={player.id || player._id}>
                                    <div>
                                        <span>{index + 1}. </span>
                                        <span className="player-name">{player.name}</span>
                                    </div>
                                    <span className="player-points">{player.totalPoints || 0} pontos</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="buttons">
                    <button type="button" onClick={exit}>
                        <img src={back2} alt="Back" />
                    </button>
                    <button type="button" onClick={handlePlayClick}>
                        <img src={play} alt="Play" />
                    </button>
                </div>
            </div>

            {showInfo && (
                <div className="modal">
                    <div className="modal-content" style={{ backgroundColor: "#393939", border: "2px solid white", color: "white" }}>
                        <div className="ranking-title">
                            <img src={fire} alt="Troféu" style={{ width: "55px", height: "80px" }} />
                            <h2 style={{ color: "white" }}>Bem-vindo ao Modo Desafio do CodeQuiz!</h2>
                            <img src={fire} alt="Troféu" style={{ width: "55px", height: "80px" }} />
                        </div>
                        <div>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <li>
                                    <p style={{ textAlign: "justify" }}>
                                        É hora de colocar em prática tudo o que você aprendeu por aqui e mostrar do que é capaz!
                                    </p>
                                </li>
                                <li>
                                    <p style={{ textAlign: "justify" }}>
                                        Teste suas habilidades e acumule pontos para desbloquear recompensas na loja!
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        Preparado(a)? Então respira fundo e bora começar!
                                    </p>
                                </li>
                                <li>
                                    <p style={{ textAlign: "justify" }}>
                                        Você vai ter 5 minutos para responder o máximo de perguntas possível, com níveis variados de dificuldade.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="ranking-buttons" style={{ gap: "125px" }}>
                            <button className="buttonModalRanking" type="button" onClick={exit}
                                style={{ height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#A13D00", border: "5px solid rgba(236, 89, 0, 0.38)" }}
                            >
                                <img src={back2} alt="Back" />
                            </button>
                            <button className="buttonModalRanking" type="button" onClick={() => setShowInfo(false)}
                                style={{ height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#A13D00", border: "5px solid rgba(236, 89, 0, 0.38)" }}
                            >
                                <img src={play} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showInfo2 && (
                <div className="modal">
                    <div className="modal-content" style={{ backgroundColor: "#393939", border: "2px solid white", color: "white" }}>
                        <div className="ranking-title">
                            <img src={fire} alt="Troféu" style={{ width: "55px", height: "80px" }} />
                            <h2 style={{ color: "white" }}>Bem-vindo ao Modo Desafio do CodeQuiz!</h2>
                            <img src={fire} alt="Troféu" style={{ width: "55px", height: "80px" }} />
                        </div>
                        <div>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <li>
                                    <p style={{ textAlign: "left", fontFamily: "var(--second-font)" }}>
                                        É hora de colocar em prática tudo o que você aprendeu por aqui e mostrar do que é capaz!
                                    </p>
                                </li>
                                <li>
                                    <p style={{ textAlign: "left", fontFamily: "var(--second-font)" }}>
                                        Teste suas habilidades e acumule pontos para desbloquear recompensas na loja!
                                    </p>
                                    <p style={{ textAlign: "left", fontFamily: "var(--second-font)" }}>
                                        Preparado(a)? Então respira fundo e bora começar!
                                    </p>
                                </li>
                                <li>
                                    <p style={{ textAlign: "left", fontFamily: "var(--second-font)" }}>
                                        Você vai ter 5 minutos para responder o máximo de perguntas possível, com níveis variados de dificuldade.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="ranking-buttons" style={{ bottom: "-40px" }}>
                            <button className="buttonModalRanking" type="button" onClick={() => setShowInfo2(false)}
                                style={{ height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#A13D00", border: "5px solid rgba(236, 89, 0, 0.38)" }}
                            >
                                <img src={back2} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </StyledChallengePage >
    );
};