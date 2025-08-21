/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { StyledSelectionLevelPage } from "./styled";

import { AnswerLog, Level, useApp} from "../../context/AppContext";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { NavBar } from "../../components/navbar";

import coin from "../../assets/assetsV2/coin.svg";

export const SelectionLevelPage = () => {
    const navigate = useNavigate();
    
    const [levels, setLevels] = useState<Level[]>([]);
    
    const { getLevels, user } = useApp();
    
    const [answeredIds, setAnsweredIds] = useState<string[]>([]);

    const [coins, setCoins] = useState(Number);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const lvls = await getLevels();
                setLevels(lvls);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };

        const fetchCompletedLevels = async () => {
            try {
                const res = await api.get(`/answerlogs/user/${user?.id}`);
                const logs: AnswerLog[] = res.data;

                const sectionAnswersMap = new Map<string, Set<string>>();
                const sectionToLevel = new Map<string, string>();

                logs.forEach((log) => {
                    if (log.isCorrect) {
                        const sectionId = typeof log.section === "string" ? log.section : log.section._id;
                        const questionId = typeof log.question === "string" ? log.question : log.question._id;
                        const levelId = typeof log.level === "string" ? log.level : log.level._id;

                        sectionToLevel.set(sectionId, levelId);

                        if (!sectionAnswersMap.has(sectionId)) {
                            sectionAnswersMap.set(sectionId, new Set());
                        }
                    sectionAnswersMap.get(sectionId)!.add(questionId);
                    }
                });

                const completedSections = Array.from(sectionAnswersMap.entries())
                    .filter(([_, answeredQuestions]) => answeredQuestions.size >= 3)
                    .map(([sectionId]) => sectionId);

                const levelSectionCount = new Map<string, number>();
                completedSections.forEach((sectionId) => {
                    const levelId = sectionToLevel.get(sectionId);
                    if (levelId) {
                        levelSectionCount.set(levelId, (levelSectionCount.get(levelId) || 0) + 1);
                    }
                });

                const completedLevels = Array.from(levelSectionCount.entries())
                    .filter(([_, count]) => count >= 6)
                    .map(([levelId]) => levelId);

                setAnsweredIds(completedLevels);
            } catch (error) {
                console.error("Erro ao buscar respostas do usuário:", error);
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

        fetchData();
        if (user?.id) fetchCompletedLevels();
    }, [getLevels, user?.id]);


    const handlePlay = (levelId: string) => {
        navigate(`/Game/${levelId}`);
    };

    const exit = () => {
        navigate("/Mode");
    };

    return (
        <StyledSelectionLevelPage>
            <NavBar/>

            <div className="container">
                <div className="containerCoin">
                    <div className="coins">
                        {coins}
                        <img src={coin} alt="" />
                    </div>
                </div>
                <h1>Fases</h1>

                <ul>
                    {levels.map((level, index) => {
                        const isAnswered = answeredIds.includes(level._id);

                        const isUnlocked = index === 0 || answeredIds.includes(levels[index - 1]._id);

                        return (
                            <li
                                key={level._id || index}
                                className={`level-square ${isAnswered ? "isAnswered" : ""} ${!isUnlocked ? "locked" : ""}`}
                            >
                                <button onClick={() => {
                                    if (isUnlocked) handlePlay(level._id);
                                }}>
                                    {index + 1}
                                </button>
                            </li>
                        );
                    })}
                </ul>

            </div>

            <div className="back">
                <button className="buttonExit" onClick={exit}>
                    Voltar
                </button>
            </div>
        </StyledSelectionLevelPage>
    );
};
