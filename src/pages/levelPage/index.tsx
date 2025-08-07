/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import iconGoldMedal from "../../assets/Gold Medal.svg";
import iconTrophy from "../../assets/Trophy.svg";
import iconArrowLeft from "../../assets/ArrowLeft.svg";

import home from "../../assets/assetsV2/ph_house.svg";
import back from "../../assets/assetsV2/return.svg";
import list from "../../assets/assetsV2/list.svg";

import { Button } from "../../components/button";
import { CardSection } from "../../components/cardSection";
import { StyleLevelPage } from "./style";
import { Level, Section, useApp, User} from "../../context/AppContext";
import { api } from "../../services/api";

export const LevelPage = () => {
    const navigate = useNavigate();

    const { levelId } = useParams();

    const { getLevels, getSections } = useApp();

    const [levels, setLevels] = useState<Level[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

    const [showRanking, setShowRanking] = useState(false);
    const [rankingData, setRankingData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lvls = await getLevels();
                const secs = await getSections();

                setLevels(lvls);
                setSections(secs);

                const levelIndex = lvls.findIndex(level => level._id === levelId);
                if (levelIndex !== -1) {
                    setCurrentLevelIndex(levelIndex);
                }
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };
        fetchData();
    }, [getLevels, getSections, levelId]);


    const currentLevel = levels[currentLevelIndex] || null;

    const currentSections = currentLevel
        ? sections.filter((section) => section.level._id === currentLevel._id)
        : [];

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
        navigate("/Level");
    };

    return (
        <StyleLevelPage>
            <nav>
                <div className="img">
                    <img src={betinha} alt="Imagem do logo" />
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>

            <div className="buttons">
                <Button buttonVariation="buttonImg" type="button" onClick={exit}>
                    <img src={iconArrowLeft} alt="Anterior" />
                </Button>
                <h1 style={{ margin: "0 auto" }}>{currentLevel?.title || "Carregando fase..."}</h1>
                <div>
                    <Button buttonVariation="buttonImg2" type="button" onClick={fetchRanking}>
                        <img src={iconGoldMedal} alt="" />
                    </Button>
                    <Button buttonVariation="buttonImg2" type="button" >
                        <img src={iconTrophy} alt="" />
                    </Button>
                </div>
            </div>

            <div className="listCards">
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

            {showRanking && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="ranking-title">
                            <img src={iconTrophy} alt="Troféu" />
                            <h2>Ranking dos Desafiados!</h2>
                        </div>

                        {rankingData.length > 0 ? (
                            <ul className="ranking-list">
                                {rankingData.map((player, index) => (
                                    <li key={player.id}>
                                        <div>
                                            <span>{index + 1}. </span>
                                            <span className="player-name">{player.name}</span>
                                        </div>
                                        <span className="player-points">{player.totalPoints} pontos</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-ranking">Nenhum jogador com pontuação no ranking ainda.</p>
                        )}

                        <div className="ranking-buttons">
                            <Button buttonVariation="buttonModalRanking" type="button">
                                <img src={home} alt="Home" />
                            </Button>
                            <Button buttonVariation="buttonModalRanking" type="button">
                                <img src={list} alt="List" />
                            </Button>
                            <Button buttonVariation="buttonModalRanking" type="button" onClick={() => setShowRanking(false)}>
                                <img src={back} alt="Back" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            
        </StyleLevelPage>
    );
};
