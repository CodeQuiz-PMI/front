/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import iconArrowLeft from "../../assets/ArrowLeft.svg";

import coin from "../../assets/assetsV2/coin.svg";

// import home from "../../assets/assetsV2/ph_house.svg";
// import back from "../../assets/assetsV2/return.svg";
// import list from "../../assets/assetsV2/list.svg";

import { CardSection } from "../../components/cardSection";
import { StyleLevelPage } from "./style";
import { AnswerLog, Level, Section, useApp } from "../../context/AppContext";
import { api } from "../../services/api";
import { NavBar } from "../../components/navbar";

export const LevelPage = () => {
    const navigate = useNavigate();

    const { levelId } = useParams();
    localStorage.setItem("level", levelId!);

    const { getLevels, getSections, 
        // getRanking,
        user } = useApp();

    const [levels, setLevels] = useState<Level[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

    // const [showRanking, setShowRanking] = useState(false);
    // const [rankingData, setRankingData] = useState<User[]>([]);

    const [coins, setCoins] = useState(Number);

    const [answeredSections, setAnsweredSections] = useState<string[]>([]);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const lvls = await getLevels();
                const secs = await getSections();
                setLevels(lvls);
                setSections(secs);

                const levelIndex = lvls.findIndex(level => level._id === levelId);
                if (levelIndex !== -1) setCurrentLevelIndex(levelIndex);

                if (user?.id) await fetchAnsweredSections(user.id);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const fetchUser = async () => {
                const get = await api.get(`/users/${user?.id}`);
                const userData = {
                    ...get.data,
                    id: get.data._id,
                };
                delete userData._id;
                delete userData.password;
                setCoins(userData.coins);

                localStorage.setItem("user", JSON.stringify(userData));
            };
            fetchUser();
        }

        fetchAll();
    }, [getLevels, getSections, levelId, user?.id]);

    const fetchAnsweredSections = async (userId: string) => {
        try {
            const res = await api.get(`/answerlogs/user/${userId}`);
            const logs: AnswerLog[] = res.data;

            const sectionAnswersMap = new Map<string, Set<string>>();

            logs.forEach((log) => {
                if (log.isCorrect) {
                    const sectionId = typeof log.section === "string" ? log.section : log.section._id;
                    const questionId = typeof log.question === "string" ? log.question : log.question._id;

                    if (!sectionAnswersMap.has(sectionId)) {
                        sectionAnswersMap.set(sectionId, new Set());
                    }

                sectionAnswersMap.get(sectionId)!.add(questionId);
                }
            });

            const completed = Array.from(sectionAnswersMap.entries())
                .filter(([_, answeredQuestions]) => answeredQuestions.size >= 3)
                .map(([sectionId]) => sectionId);

            setAnsweredSections(completed);
        } catch (error) {
            console.error("Erro ao buscar respostas do usuário:", error);
        }
    };


    const currentLevel = levels[currentLevelIndex] || null;

    const currentSections = currentLevel
        ? sections.filter((section) => section.level._id === currentLevel._id)
        : [];

    // const fetchRanking = async () => {
    //     try {
    //         const data = await getRanking();
    //         setRankingData(data);
    //         setShowRanking(true);
    //     } catch (error) {
    //         console.error("Erro ao carregar ranking:", error);
    //     }
    // };

    const exit = () => {
        navigate("/Level");
    };

    return (
        <StyleLevelPage>
            <NavBar/>

            <div className="buttons">
                <button className="buttonImg" type="button" onClick={exit}>
                    <img src={iconArrowLeft} alt="Anterior" />
                </button>
                <h1 style={{ margin: "0 auto" }}>{currentLevel?.title || "Carregando fase..."}</h1>
                <div className="containerCoin">
                    <div className="coins">
                        {coins}
                        <img src={coin} alt="" />
                    </div>
                </div>
            </div>

            <div className="listCards">
                <ul>
                    {currentSections.map((section, index) => {
                        const isAnswered = answeredSections.includes(section._id);
                        const isLocked = index > 0 && !answeredSections.includes(currentSections[index - 1]._id);

                        return (
                            <CardSection
                                key={section._id}
                                sectionId={section._id}
                                title={section.title}
                                description={section.description}
                                section={section}
                                difficulty={currentLevel.difficulty}
                                isAnswered={isAnswered}
                                isLocked={isLocked}
                            />
                        );
                    })}
                </ul>
            </div>


            {/* {showRanking && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="ranking-title">
                            <img src={iconTrophy} alt="Troféu" />
                            <h2>Ranking dos Desafiados!</h2>
                            <img src={iconTrophy} alt="Troféu" />
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
            )} */}

            
        </StyleLevelPage>
    );
};
