import React from "react";
// import trophyIcon from "../../assets/Trophy.svg"; // Descomente se for usar
// import { useNavigate } from "react-router-dom";
import { StyledCardQuestion } from "./styled";
import { Question } from "../../context/AppContext";

// ========== TIPAGENS ==========
interface CardQuestionProps {
  question: Question;
}

// ========== COMPONENTE ==========
export const CardQuestion: React.FC<CardQuestionProps> = ({ question }) => {
    // const navigate = useNavigate(); // Exemplo de uso futuro: navegação ao clicar

    return (
        <StyledCardQuestion
            // onClick={() => navigate(`/pergunta/${question._id}`)} // opcional
        >
            <div className="number">{question.order}</div>
            <p>{question.title}</p>
        </StyledCardQuestion>
    );
};
