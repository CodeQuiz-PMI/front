import { useLocation, useNavigate } from "react-router-dom";
import settings from "../../assets/Settings.svg";
import { QuestionPageStyled } from "./styled";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";

interface Section {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  level: {
    createdAt: string;
    description: string;
    difficulty: string;
    title: string;
    __v: number;
    _id: string;
  };
}

interface Question {
  _id: string;
  title: string;
  text: string;
  answer: string;
  response_1: string;
  response_2: string;
  response_3: string;
  response_4: string;
  correctResponse: string;
  type: string;
  order: number;
  points: number;
  createdAt: Date;
  section: Section;
}

type ResponseOption = {
    label: string;
    value: string;
};

export const QuestionPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { question } = location.state as { question: Question };

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const [selected, setSelected] = useState("");
    const [terminalInput, setTerminalInput] = useState("");
    const [output, setOutput] = useState("");
    const [shuffledResponses, setShuffledResponses] = useState<ResponseOption[]>([]);

    useEffect(() => {
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

        if (question.type === "dissertativa") {
            setTerminalInput(question.response_1 || "Digite seu código aqui...");
        }
    }, [question]);
    
    const shuffleArray = (array: string[]) => {
        return array
            .filter((resp) => resp.trim() !== "")
            .sort(() => Math.random() - 0.5);
    };

    const handleMultipleChoiceSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selected === question.correctResponse) {
            setModalMessage("✅ Resposta correta!");
        } else {
            setModalMessage("❌ Resposta incorreta.");
        }
        setShowModal(true);
    };

    const handleDissertativeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const pistonResult = await runCodeOnPiston(terminalInput);
      
        if (!pistonResult || !pistonResult.run) {
            setModalMessage("⚠️ Erro ao executar seu código. Tente novamente.");
            setShowModal(true);
            return;
        }
      
        const outputReceived = pistonResult.run.output.trim();
      
        if (!outputReceived) {
            setModalMessage("⚠️ Seu código não gerou saída.");
            setShowModal(true);
            return;
        }
      
        if (outputReceived === question.correctResponse.trim()) {
            setModalMessage("✅ Resposta correta!");
        } else {
            setModalMessage("❌ Resposta incorreta.\n\nSeu resultado:\n" + outputReceived);
        }
      
        setShowModal(true);
    };
    
    const handleBackToSection = () => {
        navigate(`/section/${question.section._id}`, { state: { section: question.section } });
    };
    
    const handleContinue = () => {
        setShowModal(false);
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
      
    return (
        <QuestionPageStyled>
            <div className="header">
                <h1>{question.title}</h1>
                <div>
                    <img src={settings} alt="Configurações" />
                </div>
            </div>

            <div className="container">
                {question.type === "dissertativa" ? (
                    <div className="text" style={{width: "75%"}}>
                        <p dangerouslySetInnerHTML={{ __html: formatTextWithCode(question.text) }} />
                    </div>
                ) : 
                    <div className="text">
                        <p dangerouslySetInnerHTML={{ __html: formatTextWithCode(question.text) }} />
                    </div>
                
                }               

                <div className="question">
                    {question.type === "múltipla-escolha" ? (
                        <form onSubmit={handleMultipleChoiceSubmit}>
                            <h2>{question.answer}</h2>
                            <div className="options">
                                {shuffledResponses.map((responseObj, idx) => (
                                    <label key={idx} className={selected === responseObj.value ? "selected" : ""}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={responseObj.value}
                                            onChange={(e) => setSelected(e.target.value)}
                                        />
                                        {responseObj.label}
                                    </label>
                                ))}
                            </div>

                            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                <Button type="submit" buttonVariation="type6">
                                    Confirmar
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleDissertativeSubmit}>
                            <h2>{question.answer}</h2>
                            <textarea
                                value={terminalInput}
                                onChange={(e) => setTerminalInput(e.target.value)}
                                rows={8}
                            />
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                <Button type="submit" buttonVariation="type6">
                                    Confirmar
                                </Button>
                            </div>
                        </form>
                    )}

                    {output && <p className="output">{output}</p>}

                    
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <Button
                            type="button"
                            buttonVariation="type6"
                            onClick={handleBackToSection}
                        >
                            Voltar
                        </Button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{modalMessage}</h2>
                        <Button type="button" buttonVariation="type6" onClick={handleContinue}>
                            Continuar
                        </Button>
                    </div>
                </div>
            )}
        </QuestionPageStyled>
    );
};
