import React from "react";
import { StyledCardQuestion } from "./styled";
import { Question } from "../../context/AppContext";

import lock from "../../assets/assetsV2/Lock.svg";

interface CardQuestionProps {
  question: Question;
  isAnswered?: boolean;
  isLocked?: boolean; 
}

export const CardQuestion: React.FC<CardQuestionProps> = ({ question, isAnswered, isLocked }) => {
    return (
        <StyledCardQuestion isAnswered={isAnswered}>
            <div className={`card-question ${isLocked ? "locked" : ""}`}>
                <button className="number">
                    {question.order}
                    {isLocked && <img id="lock" src={lock} alt="Bloqueado" />}
                </button>
                <p>{question.title}</p>
            </div>
        </StyledCardQuestion>
    );
};
