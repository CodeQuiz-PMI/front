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
// import { useNavigate } from "react-router-dom";
// import { StyledModeSelectionPage } from "./styled";

// import { NavBar } from "../../components/navbar";
// import { useEffect, useState } from "react";
// import { useApp, AnswerLog } from "../../context/AppContext";
// import { api } from "../../services/api";

// // 1. Importe o toast e o ToastContainer
// import { toast } from 'react-toastify';

// import type { Id } from 'react-toastify';

// export const ModeSelectionPage = () => {
//     const navigate = useNavigate();
//     const { user, getLevels } = useApp();

//     const [isLevel1Completed, setIsLevel1Completed] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const checkLevel1Completion = async () => {
//             if (!user?.id) return;

//             try {
//                 const levels = await getLevels();
//                 if (levels.length === 0) return;
//                 const level1Id = levels[0]._id;

//                 const res = await api.get(`/answerlogs/user/${user?.id}`);
//                 const logs: AnswerLog[] = res.data;

//                 const sectionAnswersMap = new Map<string, Set<string>>();
//                 const sectionToLevel = new Map<string, string>();


//                 logs.forEach((log) => {
//                     if (log.isCorrect) {
//                         const sectionId = typeof log.section === "string" ? log.section : log.section._id;
//                         const questionId = typeof log.question === "string" ? log.question : log.question._id;
//                         const levelId = typeof log.level === "string" ? log.level : log.level._id;

//                         sectionToLevel.set(sectionId, levelId);

//                         if (!sectionAnswersMap.has(sectionId)) {
//                             sectionAnswersMap.set(sectionId, new Set());
//                         }
//                         sectionAnswersMap.get(sectionId)!.add(questionId);
//                     }
//                 });

//                 const completedSections = Array.from(sectionAnswersMap.entries())
//                     .filter(([_, answeredQuestions]) => answeredQuestions.size >= 3)
//                     .map(([sectionId]) => sectionId);

//                 const levelSectionCount = new Map<string, number>();
//                 completedSections.forEach((sectionId) => {
//                     const levelId = sectionToLevel.get(sectionId);
//                     if (levelId) {
//                         levelSectionCount.set(levelId, (levelSectionCount.get(levelId) || 0) + 1);
//                     }
//                 });

//                 const completedLevels = Array.from(levelSectionCount.entries())
//                     .filter(([_, count]) => count >= 6)
//                     .map(([levelId]) => levelId);
                
//                 if (completedLevels.includes(level1Id)) {
//                     setIsLevel1Completed(true);
//                 }

//             } catch (error) {
//                 console.error("Erro ao verificar a conclusão do nível 1:", error);
//             }
//         };

//         checkLevel1Completion();
//     }, [user, getLevels]);


//     const exit = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         navigate("/");
//     };

//     const handleChallengeClick = () => {
//         if (isLevel1Completed) {
//             navigate("/Challenge");
//         } else {
//             toast.warn("Você precisa concluir a fase 1 para desbloquear o Modo Desafio!");
//         }
//     };

//     return (
//         <StyledModeSelectionPage>
//             <NavBar />

//             <div className="container">
//                 <h1 style={{ fontWeight: "400" }}>Escolha o modo de jogo:</h1>

//                 <button className="buttonHomePage" type="button" onClick={() => navigate("/Level")}>
//                     Modo de Estudos
//                 </button>

//                 <button
//                     className={`buttonHomePage2 ${!isLevel1Completed ? "locked" : ""}`}
//                     type="button"
//                     onClick={handleChallengeClick}
//                 >
//                     Modo Desafio
//                 </button>

//                 <button className="buttonExit" type="button" onClick={exit}>
//                     Sair
//                 </button>
//             </div>
//         </StyledModeSelectionPage>
//     );
// };

import { useNavigate } from "react-router-dom";
import { StyledModeSelectionPage } from "./styled";

import { NavBar } from "../../components/navbar";
import { useEffect, useState } from "react";
import { useApp, AnswerLog } from "../../context/AppContext";
import { api } from "../../services/api";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ModeSelectionPage = () => {
    const navigate = useNavigate();
    const { user, getLevels } = useApp();

    const [isLevel1Completed, setIsLevel1Completed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkLevel1Completion = async () => {
            if (!user?.id) {
                setIsLoading(false);
                return;
            };

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
            } finally {
                setIsLoading(false);
            }
        };

        checkLevel1Completion();
    }, [user, getLevels]);


    const exit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    const handleChallengeClick = () => {

        if (isLevel1Completed) {
            toast.promise(
                new Promise(resolve => setTimeout(resolve, 1000)).then(() => navigate("/Challenge")),
                {
                    pending: 'Preparando o desafio...',
                    success: 'Vamos lá!',
                    error: 'Ocorreu um erro!'
                }
            );
        } else {
            toast.warn("Você precisa concluir a fase 1 para desbloquear o Modo Desafio!");
        }
    };

    return (
        <StyledModeSelectionPage>
            <NavBar />
            <ToastContainer position="top-center" autoClose={3000} toastClassName="custom-toast"/>

            <div className="container">
                <h1 style={{ fontWeight: "400" }}>Escolha o modo de jogo:</h1>

                <button className="buttonHomePage" type="button" onClick={() => navigate("/Level")}>
                    Modo de Estudos
                </button>

                <button
                    className={`buttonHomePage2 ${!isLevel1Completed && !isLoading ? "locked" : ""}`}
                    type="button"
                    onClick={handleChallengeClick}
                    disabled={isLoading} 
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