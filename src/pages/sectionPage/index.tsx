import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import iconArrowLeft from "../../assets/ArrowLeft.svg";
import iconGoldMedal from "../../assets/Gold Medal.svg";
import iconTrophy from "../../assets/Trophy.svg";

import home from "../../assets/assetsV2/ph_house.svg";
import back from "../../assets/assetsV2/return.svg";
import list from "../../assets/assetsV2/list.svg";

import { StyledSectionPage } from "./styled";
import { CardQuestion } from "../../components/cardQuestion";
import { AnswerLog, Question, Section, useApp, User } from "../../context/AppContext";
import { Button } from "../../components/button";
import { api } from "../../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { getQuestions, user, getRanking } = useApp();
        
    const { section } = location.state as { section: Section };
    
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answeredIds, setAnsweredIds] = useState<string[]>([]);

    const [showRanking, setShowRanking] = useState(false);
    const [rankingData, setRankingData] = useState<User[]>([]);

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
        

        fetchQuestions();
        if (user?.id) fetchAnswered();
    }, [section._id, getQuestions, user?.id, section.level._id]);

    const fetchRanking = async () => {
        try {
            const data = await getRanking();
            setRankingData(data);
            setShowRanking(true);
        } catch (error) {
            console.error("Erro ao carregar ranking:", error);
        }
    };

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
                                cursor: "pointer",
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
            <nav>
                <div className="img">
                    <img src={betinha} alt="Imagem do logo" onClick={() => navigate("/Mode")}/>
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
                <h1><h1>{section.title}</h1></h1>
                <div>
                    <Button buttonVariation="buttonImg2" type="button" onClick={fetchRanking}>
                        <img src={iconGoldMedal} alt="" />
                    </Button>
                    <Button buttonVariation="buttonImg2" type="button" >
                        <img src={iconTrophy} alt="" />
                    </Button>
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

            {showRanking && (
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
            )}

        </StyledSectionPage>
    );
};
