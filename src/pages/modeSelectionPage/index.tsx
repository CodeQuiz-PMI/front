// import { useNavigate } from "react-router-dom";
// import { StyledModeSelectionPage } from "./styled";

// import { NavBar } from "../../components/navbar";

// export const ModeSelectionPage = () => {
//     const navigate = useNavigate();

//     const exit = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         navigate("/");
//     };

//     return (
//         <StyledModeSelectionPage>
//             <NavBar />

//             <div className="container">
//                 <h1 style={{ fontWeight: "400" }}>Escolha o modo de jogo:</h1>

//                 <button className="buttonHomePage" type="button" onClick={() => navigate("/Level")}>
//                     Modo de Estudos
//                 </button>

//                 <button className="buttonHomePage2" type="button" onClick={() => navigate("/Challenge")}>
//                     Modo Desafio
//                 </button>

//                 <button className="buttonExit" type="button" onClick={exit}>
//                     Sair
//                 </button>
//             </div>
//         </StyledModeSelectionPage>
//     );
// };

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { StyledModeSelectionPage } from "./styled";

import { NavBar } from "../../components/navbar";
import { useEffect, useState } from "react";
import { useApp, AnswerLog } from "../../context/AppContext";
import { api } from "../../services/api";

// 1. Importe o toast e o ToastContainer
import { toast } from 'react-toastify';


export const ModeSelectionPage = () => {
    const navigate = useNavigate();
    const { user, getLevels } = useApp();

    // 2. Estado para controlar a conclusão do nível 1
    const [isLevel1Completed, setIsLevel1Completed] = useState(false);

    // 3. Efeito para verificar se o nível 1 foi concluído
    useEffect(() => {
        const checkLevel1Completion = async () => {
            if (!user?.id) return;

            try {
                const levels = await getLevels();
                if (levels.length === 0) return;
                const level1Id = levels[0]._id;

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
                
                if (completedLevels.includes(level1Id)) {
                    setIsLevel1Completed(true);
                }

            } catch (error) {
                console.error("Erro ao verificar a conclusão do nível 1:", error);
            }
        };

        checkLevel1Completion();
    }, [user, getLevels]);


    const exit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    // 4. Função para lidar com o clique no botão de desafio
    const handleChallengeClick = () => {
        if (isLevel1Completed) {
            navigate("/Challenge");
        } else {
            // Dispara o toast de aviso se o nível 1 não estiver completo
            toast.warn("Você precisa concluir a fase 1 para desbloquear o Modo Desafio!");
        }
    };

    return (
        <StyledModeSelectionPage>
            <NavBar />

            <div className="container">
                <h1 style={{ fontWeight: "400" }}>Escolha o modo de jogo:</h1>

                <button className="buttonHomePage" type="button" onClick={() => navigate("/Level")}>
                    Modo de Estudos
                </button>

                <button
                    className={`buttonHomePage2 ${!isLevel1Completed ? "locked" : ""}`}
                    type="button"
                    onClick={handleChallengeClick} // Chama a nova função de clique
                >
                    Modo Desafio
                </button>

                <button className="buttonExit" type="button" onClick={exit}>
                    Sair
                </button>
            </div>
        </StyledModeSelectionPage>
    );
};