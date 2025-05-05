import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import gearIcon from "../../assets/Settings.svg";
import { StyledSectionPage } from "./styled";
import { CardQuestion } from "../../components/cardQuestion";
import { useApp } from "../../context/AppContext";
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

export const SectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { getQuestions } = useApp();
    const { section } = location.state as { section: Section };

    const [questions, setQuestions] = useState<Question[]>([]);

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
    
        fetchQuestions();
    }, [section._id, getQuestions]);
    
    return(
        <StyledSectionPage>
            <header className="header">
                <div className="title">
                    <h1>{section.title}</h1>
                    <p>{section.description}</p>
                </div>
                <div className="config">
                    <img src={gearIcon} alt="Configurações" />
                </div>
            </header>
  
            <div className="progress">
                {questions.map((question) => (
                    <CardQuestion key={question._id} question={question} />
                ))}
            </div>
  
            <div className="footer">
                <Button buttonVariation="type2" type="button" onClick={() => navigate("/Game")}>Voltar</Button>
            </div>
        </StyledSectionPage>
    );
};