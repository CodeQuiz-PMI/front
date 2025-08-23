import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import iconArrowLeft from "../../assets/ArrowLeft.svg";
// import iconGoldMedal from "../../assets/Gold Medal.svg";
// import iconTrophy from "../../assets/Trophy.svg";

// import home from "../../assets/assetsV2/ph_house.svg";
// import back from "../../assets/assetsV2/return.svg";
// import list from "../../assets/assetsV2/list.svg";

import coin from "../../assets/assetsV2/coin.svg";

import { StyledSectionPage } from "./styled";
import { CardQuestion } from "../../components/cardQuestion";
import { AnswerLog, Question, Section, useApp } from "../../context/AppContext";
import { Button } from "../../components/button";
import { api } from "../../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../components/navbar";

export const SectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { getQuestions, user, 
        // getRanking 
    } = useApp();
        
    const { section } = location.state as { section: Section };
    
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answeredIds, setAnsweredIds] = useState<string[]>([]);

    // const [showRanking, setShowRanking] = useState(false);
    // const [rankingData, setRankingData] = useState<User[]>([]);

    const [coins, setCoins] = useState(Number);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const allQuestions = await getQuestions();
                const filtered = allQuestions
                    .filter((q) => q.section && q.section._id === section._id)
                    .sort((a, b) => a.order - b.order);
                
                setQuestions(filtered);
            } catch (error) {
                console.error("Erro ao carregar questões:", error);
            }
        };

        const fetchAnswered = async () => {
            try {
                const res = await api.get(`/answerlogs/user/${user?.id}`);
                const answered = res.data
                    .filter((log: AnswerLog) => log.isCorrect === true)
                    .map((log: AnswerLog) => log.question);
                setAnsweredIds(answered);
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
        

        fetchQuestions();
        if (user?.id) fetchAnswered();
    }, [section._id, getQuestions, user?.id, section.level._id]);

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
        const level = localStorage.getItem("level");
        navigate(`/Game/${level}`);
    };

    const handleQuestionClick = (question: Question) => {
        const alreadyAnsweredCorrectly = answeredIds.includes(question._id);

        if (alreadyAnsweredCorrectly) {
            toast.info(
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <p style={{ color: "#2FFF00" }}>
                        Você já respondeu essa pergunta corretamente. Nenhum ponto será somado.
                    </p>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                        <button
                            style={{
                                backgroundColor: "#2FFF00",
                                color: "#2A2A2A",
                                padding: "4px 8px",
                                border: "none",
                                borderRadius: "4px",
                                fontFamily: "Jersey 25, sans-serif",
                            }}
                            onClick={() => {
                                navigate(`/question/${question._id}`, { state: { question } });
                                toast.dismiss();
                            }}
                        >
                            Continuar
                        </button>
                    </div>
                </div>,
                {
                    style: {
                        backgroundColor: "#2A2A2A",
                        color: "#2FFF00",
                        fontFamily: "Jersey 25, sans-serif",
                    },
                    autoClose: false,
                    closeOnClick: false,
                }
            );
        } else {
            navigate(`/question/${question._id}`, { state: { question } });
        }
    };

    return(
        <StyledSectionPage>
            <NavBar/>

            <div className="buttons">
                <Button buttonVariation="buttonImg" type="button" onClick={exit}>
                    <img src={iconArrowLeft} alt="Anterior" />
                </Button>
                <h1><h1>{section.title}</h1></h1>
                <div className="containerCoin">
                    <div className="coins">
                        {coins}
                        <img src={coin} alt="" />
                    </div>
                </div>
            </div>

            <div className="progress">
                {questions.map((question, index) => {
                    const isAnswered = answeredIds.includes(question._id);

                    const isUnlocked = index === 0 || answeredIds.includes(questions[index - 1]._id);

                    return (
                        <div className="question-with-line" key={question._id}>
                            <div
                                onClick={() => {
                                    if (isUnlocked) {
                                        handleQuestionClick(question);
                                    } else {
                                        toast.info("Responda a pergunta anterior para desbloquear esta!");
                                    }
                                }}
                            >
                                <CardQuestion
                                    question={question}
                                    isAnswered={isAnswered}
                                    isLocked={!isUnlocked}
                                />
                            </div>

                            {index < questions.length - 1 && (
                                <div className={`line-between ${isAnswered ? "answered" : ""}`} />
                            )}
                        </div>
                    );
                })}
            </div>
        </StyledSectionPage>
    );
};
