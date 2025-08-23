import { Link, useNavigate } from "react-router-dom";

import { ChallengeQuestionPageStyled } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Challenge, useApp } from "../../context/AppContext";

import starYellow from "../../assets/starYellow.svg";
import starDark from "../../assets/starDark.svg";
import mascotGood from "../../assets/betinha/impressionado.svg";
import mascotMedium from "../../assets/betinha/Feliz.svg";
import mascotBad from "../../assets/betinha/triste.svg";
import coin from "../../assets/assetsV2/coinWhite.svg";

import betinha from "../../assets/betinha2.svg";
import store from "../../assets/store2.svg";
import about from "../../assets/about2.svg";
import config from "../../assets/config2.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "../../components/navbar";

type ResponseOption = {
    label: string;
    value: string;
};

export const ChallengeQuestionPage = () => {
    const navigate = useNavigate();
    const { user } = useApp();

    const [questions, setQuestions] = useState<Challenge[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300);
    const [isChallengeOver, setIsChallengeOver] = useState(false);
    const [selected, setSelected] = useState("");
    const [shuffledResponses, setShuffledResponses] = useState<ResponseOption[]>([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [, setSkippedQuestionsCount] = useState(0);

    const shuffleArray = <T,>(array: T[]): T[] => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const fetchAndPrepareChallenge = async () => {
            try {
                const response = await api.get("/challenges");
                const allQuestions = response.data;

                if (allQuestions && allQuestions.length > 0) {
                    setQuestions(shuffleArray(allQuestions));
                } else {
                    toast.error("Não foi possível carregar as questões do desafio.");
                    navigate("/Challenge");
                }
            } catch (error) {
                console.error("Erro ao buscar questões do desafio:", error);
                toast.error("Erro ao carregar o desafio.");
                navigate("/Challenge");
            }
        };

        fetchAndPrepareChallenge();
    }, [navigate]);

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsChallengeOver(true);
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        if (currentQuestion) {
            const responses = [
                currentQuestion.response_1,
                currentQuestion.response_2,
                currentQuestion.response_3,
                currentQuestion.response_4,
            ].filter((resp) => resp && resp.trim() !== "");

            setShuffledResponses(shuffleArray(responses).map((response, index) => ({
                label: `${["A)", "B)", "C)", "D)"][index]} ${response}`,
                value: response,
            })));
        }
    }, [currentQuestion]);

    const goToNextQuestion = () => {
        if (timeLeft <= 0) {
            setIsChallengeOver(true);
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelected("");
        } else {
            setIsChallengeOver(true);
        }
    };

    const handleMultipleChoiceSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selected) return;

        const isCorrect = selected === currentQuestion.correctResponse;

        if (isCorrect) {
            setCorrectAnswersCount(prev => prev + 1);
            setTotalPoints(prev => prev + (currentQuestion.points || 0));
        }

        goToNextQuestion();
    };

    const handleSkip = () => {
        setSkippedQuestionsCount(prev => prev + 1);
        goToNextQuestion();
    };

    const handleGiveUp = () => {
        navigate("/Challenge");
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const formatTextWithCode = (text: string) => {
        if (!text) return "";
        const withBlockCode = text.replace(/```([\s\S]*?)```/g, (_match, code) => `<pre><code>${code.trim()}</code></pre>`);
        return withBlockCode.replace(/`([^`]+)`/g, (_match, code) => `<code>${code}</code>`);
    };

    const formatTextWithCode2 = (text: string) => {
        if (!text) return "";
        const unescaped = text.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\"/g, '"');
        const withBlockCode = unescaped.replace(/```([\s\S]*?)```/g, (_match, code) => `<pre><code>${code.trim()}</code></pre>`);
        const withInlineCode = withBlockCode.replace(/`([^`]+)`/g, (_match, code) => `<code>${code}</code>`);
        return withInlineCode.replace(/\n/g, "<br/>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    };

    useEffect(() => {
        const submitChallengeResults = async () => {
            if (user && user.id) {
                let starsEarned = 0;
                if (correctAnswersCount >= 15) starsEarned = 3;
                else if (correctAnswersCount >= 10) starsEarned = 2;
                else if (correctAnswersCount >= 5) starsEarned = 1;

                let coinsEarned = 0;
                if (starsEarned === 3) coinsEarned = 15;
                else if (starsEarned === 2) coinsEarned = 10;
                else if (starsEarned === 1) coinsEarned = 5;

                const newTotalPoints = totalPoints > (user.totalPoints || 0)
                    ? totalPoints
                    : (user.totalPoints || 0);

                const newCoins = (user.coins || 0) + coinsEarned;

                const payload: { totalPoints: number; coins: number; record: number } = {
                    totalPoints: newTotalPoints,
                    coins: newCoins,
                    record: correctAnswersCount,
                };

                if (totalPoints > 0 || coinsEarned > 0) {
                    try {
                        await api.patch(`/users/${user.id}`, payload);

                    } catch (error) {
                        console.error("Erro ao salvar os pontos e moedas:", error);
                        toast.error("Não foi possível salvar sua pontuação.");
                    }
                }
            }
        };

        if (isChallengeOver) {
            submitChallengeResults();
        }
    }, [isChallengeOver, totalPoints, correctAnswersCount, user, navigate]);


    const renderChallengeResult = () => {
        let starsEarned = 0;
        if (correctAnswersCount >= 15) {
            starsEarned = 3;
        } else if (correctAnswersCount >= 10) {
            starsEarned = 2;
        } else if (correctAnswersCount >= 5) {
            starsEarned = 1;
        }

        const star1 = starsEarned >= 1 ? starYellow : starDark;
        const star2 = starsEarned >= 3 ? starYellow : starDark;
        const star3 = starsEarned >= 2 ? starYellow : starDark;

        let mascotImage = mascotBad;
        if (starsEarned === 3) mascotImage = mascotGood;
        else if (starsEarned === 2) mascotImage = mascotMedium;

        // NOVO: Lógica de moedas baseada nas estrelas
        let coinsEarned = 0;
        if (starsEarned === 3) coinsEarned = 15;
        else if (starsEarned === 2) coinsEarned = 10;
        else if (starsEarned === 1) coinsEarned = 5;

        return (
            <div className="modal">
                <div className="modal-content" style={{ backgroundColor: "#393939", border: "2px solid white" }}>
                    <h2 style={{ color: "white" }}>{timeLeft <= 0 ? "Tempo Esgotado!" : "Desafio Concluído!"}</h2>
                    <div>
                        <img src={star1} alt="Estrela 1" />
                        <img src={star2} alt="Estrela 2" style={{ width: "120px", marginBottom: "10px" }} />
                        <img src={star3} alt="Estrela 3" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: "20px", width: "100%" }}>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ color: "white", fontSize: "25px" }}>Acertos</p>
                            <p style={{ color: "white", fontSize: "25px" }}>{correctAnswersCount}</p>
                        </div>
                        <div>
                            <img src={mascotImage} alt="Mascote de desempenho" style={{ width: "100px" }} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ color: "white", fontSize: "25px" }}>Pontuação</p>
                            <p style={{ color: "white", fontSize: "25px" }}>{totalPoints}</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <p style={{ color: "white", fontSize: "25px" }}>Moedas ganhas: {coinsEarned}</p>
                        <img src={coin} alt="Moeda" style={{ width: "20px" }} />
                    </div>
                    <button onClick={() => navigate("/Challenge")}
                        style={{
                            width: "250px", height: "50px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            border: "1px solid white", borderRadius: "10px",
                            color: "white", textAlign: "center", fontSize: "25px", fontStyle: "normal",
                            backgroundColor: "transparent", cursor: "pointer"
                        }}
                    >
                        Jogar Novamente
                    </button>
                </div>
            </div>
        );
    };

    if (!currentQuestion) {
        return (
            <ChallengeQuestionPageStyled>
                <NavBar />
                <div className="container">
                    <h2>Carregando desafio...</h2>
                </div>
            </ChallengeQuestionPageStyled>
        );
    }

    return (
        <ChallengeQuestionPageStyled>
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

            <div className="container">
                <div className="timer">
                    <h1 style={{ color: "white" }}>{formatTime(timeLeft)}</h1>
                </div>

                <div className="question">
                    <form onSubmit={handleMultipleChoiceSubmit}>
                        <h2 style={{ marginBottom: "15px", fontSize: "22px" }} dangerouslySetInnerHTML={{ __html: formatTextWithCode(currentQuestion.answer) }} />
                        <div className="options">
                            {shuffledResponses.map((responseObj, idx) => (
                                <label key={idx} className={selected === responseObj.value ? "selected" : ""}>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={responseObj.value}
                                        onChange={(e) => setSelected(e.target.value)}
                                        checked={selected === responseObj.value}
                                    />
                                    <span dangerouslySetInnerHTML={{ __html: formatTextWithCode2(responseObj.label) }} />
                                </label>
                            ))}
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "20px" }}>
                            <button type="button" onClick={handleGiveUp}>Desistir</button>
                            <button type="button" onClick={handleSkip}>Pular</button>
                            <button type="submit" disabled={!selected}>Responder</button>
                        </div>
                    </form>
                </div>
            </div>

            {isChallengeOver && renderChallengeResult()}
        </ChallengeQuestionPageStyled>
    );
};