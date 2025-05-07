// import trophyIcon from "../../assets/Trophy.svg";
import { useNavigate } from "react-router-dom";
import { StyledCardQuestion } from "./styled";

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

interface CardQuestionProps {
    question: Question;
}

export const CardQuestion: React.FC<CardQuestionProps> = ({question}) => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate(`/Question/${question._id}`, { state: { question } });
    };

    return(
        <StyledCardQuestion>
            <div className="number" onClick={handlePlay}>{question.order}</div>
            <p>{question.title}</p>
        </StyledCardQuestion>
    );
};