import { Link, useLocation, useNavigate } from "react-router-dom";

import { QuestionPageStyled } from "./styled";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { api } from "../../services/api";
import { AnswerLog, Question, useApp } from "../../context/AppContext";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import lamp from "../../assets/assetsV2/lamp.svg";
import arrow from "../../assets/ArrowLeft.svg";
import back from "../../assets/assetsV2/return.svg";
import bolsa from "../../assets/assetsV2/bolsamoedas.svg";
import coin from "../../assets/assetsV2/coin.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastOptions } from "react-toastify";

type ResponseOption = {
    label: string;
    value: string;
};

export const QuestionPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { question } = location.state as { question: Question };

    const { user } = useApp();

    const [selected, setSelected] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [coins, setCoins ] = useState();
    const [showHintStore, setShowHintStore] = useState(false);

    const [shuffledResponses, setShuffledResponses] = useState<ResponseOption[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            const get = await api.get(`/users/${user?.id}`);
            const userData = {
                ...get.data,
                id: get.data._id,
            };
            delete userData._id;
            setCoins(get.data.coins);

            localStorage.setItem("user", JSON.stringify(userData));
        };
        fetchUser();
        
        if (question.type === "múltipla-escolha") {
            const responses = [
                question.response_1,
                question.response_2,
                question.response_3,
                question.response_4,
            ].filter((resp) => resp.trim() !== ""); // Remove vazios
            
            const shuffled = shuffleArray(responses);
            
            const prefixLetters = ["A)", "B)", "C)", "D)"];
            
            const responsesWithPrefix = shuffled.map((response, index) => ({
                label: `${prefixLetters[index]} ${response}`,
                value: response,
            }));
            
            setShuffledResponses(responsesWithPrefix);
        }
        
        fetchUser();
    }, [question, user?.id]);
    
    const shuffleArray = (array: string[]) => {
        return array
            .filter((resp) => resp.trim() !== "")
            .sort(() => Math.random() - 0.5);
    };

    const handleContinue = () => {
        navigate(`/section/${question.section._id}`, { state: { section: question.section } });
    };

    const handleMultipleChoiceSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isCorrect = selected === question.correctResponse;

        const toastContent = (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p style={{ color: "#2FFF00" }}>
                    {isCorrect
                        ? "Resposta correta!"
                        : "Resposta incorreta."}
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
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
                            handleContinue();
                            toast.dismiss();
                        }}
                    >
                    Continuar
                    </button>
                </div>
            </div>
        );

        const toastOptions: ToastOptions = {
            style: {
                backgroundColor: "#2A2A2A",
                color: "#2FFF00",
                fontFamily: "Jersey 25, sans-serif",
            },
            autoClose: false,
            closeOnClick: false,
        };

        if (isCorrect) {
            toast.success(toastContent, toastOptions);
        } else {
            toast.warn(toastContent, toastOptions);
        }

        await submitAnswerLog(selected, isCorrect);
    };


         
    const handleBackToSection = () => {
        navigate(`/section/${question.section._id}`, { state: { section: question.section } });
    };
    
    const formatTextWithCode = (text: string) => {
        const withBlockCode = text.replace(/```([\s\S]*?)```/g, (_match, code) => {
            return `<pre><code>${code.trim()}</code></pre>`;
        });

        const withInlineCode = withBlockCode.replace(/`([^`]+)`/g, (_match, code) => {
            return `<code>${code}</code>`;
        });

        return withInlineCode;
    };
    
    const formatTextWithCode2 = (text: string) => {
        if (!text) return "";
      
        const unescaped = text
            .replace(/\\\\n/g, "\n")
            .replace(/\\n/g, "\n")
            .replace(/\\\\t/g, "\t")
            .replace(/\\t/g, "\t")
            .replace(/\\"/g, '"');
      
        const withBlockCode = unescaped.replace(/```([\s\S]*?)```/g, (_match, code) => {
            return `<pre><code>${code.trim()}</code></pre>`;
        });
      
        const withInlineCode = withBlockCode.replace(/`([^`]+)`/g, (_match, code) => {
            return `<code>${code}</code>`;
        });
      
        return withInlineCode
            .replace(/\n/g, "<br/>")
            .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    };

    const submitAnswerLog = async (userAnswer: string, isCorrect: boolean) => {
        try {
            const res = await api.get(`/answerlogs/user/${user?.id}`);
    
            const existingLog = res.data.find(
                (log: AnswerLog) => log.question === question._id
            );

            if (existingLog?.isCorrect) {
                return;
            }

            if (existingLog && !existingLog.isCorrect) {
                await api.put(`/answerlogs/${existingLog._id}`, {
                    userAnswer,
                });
            } else {
                await api.post("/answerlogs", {
                    userId: user?.id,
                    questionId: question._id,
                    userAnswer,
                    isCorrect,
                });
            }

        } catch (error) {
            console.error("Erro ao salvar log da resposta:", error);
        }
    };

    const handleHintClick = async () => {
        const userDataString = localStorage.getItem("user");
        if (!userDataString) {
            console.error("Usuário não encontrado no localStorage.");
            return; 
        }
        const userFromStorage = JSON.parse(userDataString);
        if (userFromStorage.hints && userFromStorage.hints > 0) {
            setShowHint(true);
            try {
                const updates = { hints: userFromStorage.hints - 1 };
                const res = await api.patch(`/users/${user?.id}`, updates);

                localStorage.setItem("user", JSON.stringify(res.data));

            } catch (err) {
                console.error("Erro ao debitar dica:", err);
                setShowHint(false);
            }
        } else {
            setShowHintStore(true);
        }
    };

    const handleBuyHint = async () => {
        if (!user) return;

        const currentCoins = coins ?? 0;

        const toastOptions: ToastOptions = {
            style: {
                backgroundColor: "#2A2A2A",
                color: "#2FFF00",
                fontFamily: "Jersey 25, sans-serif",
            },
            autoClose: 2000,
        };

        if (currentCoins < 10) {
            toast.warn("Você não tem moedas suficientes para comprar uma dica!", toastOptions);
            return;
        }

        try {
            const updatedCoins = currentCoins - 10;
            const res = await api.patch(`/users/${user.id}`, { coins: updatedCoins });

            toast.success("Dica comprada com sucesso!", toastOptions);

            const get = await api.get(`/users/${user?.id}`);
            const userData = {
                ...get.data,
                id: get.data._id,
            };
            delete userData._id;
            setCoins(get.data.coins);

            localStorage.setItem("user", JSON.stringify(userData));

            setShowHint(true);
            setShowHintStore(false);

        } catch (err) {
            console.error("Erro ao comprar dica:", err);
            toast.error("Erro ao processar compra da dica!", toastOptions);
        }
    };


          
    return (
        <QuestionPageStyled>
            <nav>
                <div className="img">
                    <img src={betinha} alt="Imagem do logo" />
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>

            
            <div className="header">
                <img src={arrow} alt="" onClick={handleBackToSection}/>
                <h1>{question.title}</h1>
                <img src={lamp} alt="Configurações" onClick={handleHintClick}/>
            </div>

            <div className="container">
                {question.type === "dissertativa" ? (
                    <div className="text">
                        <p dangerouslySetInnerHTML={{ __html: formatTextWithCode(question.text) }} />
                    </div>
                ) : 
                    <div className="text">
                        <p dangerouslySetInnerHTML={{ __html: formatTextWithCode(question.text) }} />
                    </div>
                
                }               

                <div className="question">
                    <form onSubmit={handleMultipleChoiceSubmit}>
                        <h2 dangerouslySetInnerHTML={{ __html: formatTextWithCode(question.answer) }} />
                        <div className="options">
                            {shuffledResponses.map((responseObj, idx) => (
                                <label key={idx} className={selected === responseObj.value ? "selected" : ""}>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={responseObj.value}
                                        onChange={(e) => setSelected(e.target.value)}
                                    />
                                    <span dangerouslySetInnerHTML={{ __html: formatTextWithCode2(responseObj.label) }} />
                                </label>
                            ))}
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "20px" }}>
                            <Button
                                type="button"
                                buttonVariation="buttonExit2"
                                onClick={handleBackToSection}
                            >
                                Desistir
                            </Button>
                            <Button type="submit" buttonVariation="buttonExit2">
                                Confirmar
                            </Button>
                        </div>
                    </form>
                                        
                    
                </div>
            </div>
                            
            {showHint && (
                <div className="modal">
                    <div className="modal-content" style={{padding: "30px 40px 55px"}}>
                        <div className="ranking-title">
                            <img src={lamp} alt="Troféu" />
                            <h2>Dica</h2>
                            <img src={lamp} alt="Troféu" />
                        </div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: formatTextWithCode(question.hint),
                            }}
                        />
                        <div className="ranking-buttons">
                            <Button buttonVariation="buttonModalRanking" type="button" onClick={() => setShowHint(false)}>
                                <img src={back} alt="Back" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {showHintStore && (
                <div className="modal">
                    <div className="modal-content" style={{padding: "30px 40px 55px"}}>
                        <div className="ranking-title">
                            <h2>Vai uma dica?</h2>
                        </div>
                        <div className="hintModel">
                            <div className="imgmodel">
                                <img src={bolsa} alt="" />
                                <p>Suas moedas: {coins}</p>
                            </div>
                            <div className="imgmodel">
                                <img src={coin} alt="" />
                                <p>Custo da dica: {10}</p>
                            </div>
                        </div>
                        <div className="butons">
                            <Button buttonVariation="buttonModalHint" type="button" onClick={() => setShowHintStore(false)}>
                                Dessa vez não
                            </Button>
                            <Button buttonVariation="buttonModalHint" type="button" onClick={handleBuyHint}>
                                Quero!
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </QuestionPageStyled>
    );
};
