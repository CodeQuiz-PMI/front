/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import iconConfig from "../../assets/Settings.svg";
import iconGoldMedal from "../../assets/Gold Medal.svg";
import iconArrowRight from "../../assets/ArrowRight.svg";
import iconArrowLeft from "../../assets/ArrowLeft.svg";

import { Button } from "../../components/button";
import { CardSection } from "../../components/cardSection";
import { StyleLevelPage } from "./style";
import { Level, Section, useApp, User } from "../../context/AppContext";
import { api } from "../../services/api";

export const LevelPage = () => {
    const navigate = useNavigate();
    const { getLevels, getSections } = useApp();

    const [levels, setLevels] = useState<Level[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

    const [showRanking, setShowRanking] = useState(false);
    const [rankingData, setRankingData] = useState<User[]>([]);
    const [modalMessage, setModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lvls = await getLevels();
                const secs = await getSections();
                setLevels(lvls);
                setSections(secs);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };
        fetchData();
    }, [getLevels, getSections]);

    const currentLevel = levels[currentLevelIndex] || null;

    const currentSections = currentLevel
        ? sections.filter((section) => section.level._id === currentLevel._id)
        : [];

    const goToNextLevel = () => {
        if (currentLevelIndex < levels.length - 1) {
            setCurrentLevelIndex((prev) => prev + 1);
        }
    };

    const goToPreviousLevel = () => {
        if (currentLevelIndex > 0) {
            setCurrentLevelIndex((prev) => prev - 1);
        }
    };

    const fetchRanking = async () => {
        try {
            const res = await api.get("/users");
          
            const filteredAndSorted = res.data
                .filter((user: any) => user.totalPoints && user.totalPoints > 0)
                .sort((a: any, b: any) => b.totalPoints - a.totalPoints)
                .slice(0, 10);

            setRankingData(filteredAndSorted);
            setShowRanking(true);
        } catch (error) {
            console.error("Erro ao carregar ranking:", error);
        }
    };

    const exit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    const modalMode = () => {
        setModalMessage("Este modo estará disponível em breve!");
        setShowModal(true);
    };


    return (
        <StyleLevelPage>
            <div className="header">
                <div className="title">
                    <h1>Escolha um tema</h1>
                    <p>Complete os desafios para testar e aprimorar seus conhecimentos em programação!</p>
                </div>
                <div className="config">
                    <img src={iconConfig} alt="icon setting" onClick={() => navigate("/configurations")} />
                </div>
            </div>

            <div className="buttons">
                <Button buttonVariation="type2" type="button" onClick={modalMode}>
                    Modo de Jogo
                </Button>

                <div>
                    <Button buttonVariation="type4" type="button" onClick={fetchRanking}>
                        Ranking <img src={iconGoldMedal} alt="" />
                    </Button>
                </div>
            </div>

            <div className="listCards">
                <div className="text" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{width:"98px"}}>
                        {currentLevelIndex > 0 && (
                            <button
                                onClick={goToPreviousLevel}
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                <img src={iconArrowLeft} alt="Anterior" />
                            </button>
                        )}
                    </div>

                    <h1 style={{ margin: "0 auto" }}>{currentLevel?.title || "Carregando fase..."}</h1>
                    
                    <div style={{width:"98px"}}>
                        {currentLevelIndex < levels.length - 1 && (
                            <button
                                onClick={goToNextLevel}
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                <img src={iconArrowRight} alt="Próximo" />
                            </button>
                        )}
                    </div>
                </div>


                <ul>
                    {currentSections.map((section) => (
                        <CardSection
                            key={section._id}
                            sectionId={section._id}
                            title={section.title}
                            description={section.description}
                            section={section}
                            difficulty={currentLevel.difficulty}
                        />
                    ))}
                </ul>

            </div>

            <div className="back">
                <Button buttonVariation="type4" type="button" onClick={exit}>
                    Sair
                </Button>
            </div>

            {
                showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>{modalMessage}</h2>
                            <Button buttonVariation="type6" type="button" onClick={() => setShowModal(false)}>
                                Fechar
                            </Button>
                        </div>
                    </div>
            )}

            {showRanking && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ranking de Jogadores</h2>
                        {rankingData.length > 0 ? (
                            <ul style={{ textAlign: "left", width: "auto" }}>
                                {rankingData.map((player, index) => {
                                    const topIcon = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}º`;
                                    return (
                                        <li key={player.id} style={{display: "flex", flexDirection: "row"}}>
                                            <strong style={{ display: "flex", width: "2em", textAlign: "center", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                {topIcon}
                                            </strong>{" "}
                                            - {player.name} ({player.totalPoints} pts)
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p style={{ fontFamily: "Space Mono" }}>
                                Nenhum jogador com pontuação no ranking ainda.
                            </p>
                        )}

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
                            <Button buttonVariation="buttonMini" type="button" onClick={() => setShowRanking(false)}>
                                Fechar
                            </Button>
                        </div>
                    </div>
                )
            }
        </StyleLevelPage>
    );
};
