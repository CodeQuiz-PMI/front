import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import gearIcon from "../../assets/Settings.svg";
import { StyledSectionPage } from "./styled";
import { CardQuestion } from "../../components/cardQuestion";
import { AnswerLog, Question, Section, useApp } from "../../context/AppContext";
import { Button } from "../../components/button";
import { api } from "../../services/api";

export const SectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { getQuestions, user } = useApp();
    const { section } = location.state as { section: Section };

    const [questions, setQuestions] = useState<Question[]>([]);
    const [answeredIds, setAnsweredIds] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [clickedQuestion, setClickedQuestion] = useState<Question | null>(null);

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
    }, [section._id, getQuestions, user?.id]);

    const handleQuestionClick = (question: Question) => {
        const alreadyAnsweredCorrectly = answeredIds.includes(question._id);

        if (alreadyAnsweredCorrectly) {
            setClickedQuestion(question);
            setModalMessage("Você já respondeu essa pergunta corretamente. Nenhum ponto será somado.");
            setShowModal(true);
        } else {
            navigate(`/question/${question._id}`, { state: { question } });
        }
    };



    return(
        <StyledSectionPage>
            <header className="header">
                <div className="title">
                    <h1>{section.title}</h1>
                    <p>{section.description}</p>
                </div>
                <div className="config">
                    <img src={gearIcon} alt="Configurações" onClick={() => navigate("/configurations")} />
                </div>
            </header>

            <div className="progress">
                {questions.map((question) => (
                    <div key={question._id} onClick={() => handleQuestionClick(question)}>
                        <CardQuestion question={question} />
                    </div>
                ))}
            </div>

            <div className="footer">
                <Button buttonVariation="type2" type="button" onClick={() => navigate("/Game")}>Voltar</Button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{modalMessage}</h2>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "1rem" }}>
                            <Button buttonVariation="type4" type="button" onClick={() => setShowModal(false)}>
                                Fechar
                            </Button>
                            <Button
                                buttonVariation="type6"
                                type="button"
                                onClick={() => {
                                    if (clickedQuestion) {
                                        setShowModal(false);
                                        navigate(`/question/${clickedQuestion._id}`, { state: { question: clickedQuestion } });
                                    }
                                }}
                            >
                                Continuar
                            </Button>
                        </div>
                    </div>
                </div>
            )}

        </StyledSectionPage>
    );
};
