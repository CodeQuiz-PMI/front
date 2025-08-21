import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { StyleCardSection } from "./style";
import { Section } from "../../context/AppContext";

import star from "../../assets/assetsV2/Star 3.svg";
import lock from "../../assets/assetsV2/Lock.svg";

interface CardSectionProps {
    title: string;
    description: string;
    sectionId: string;
    section: Section;
    difficulty: string;
    isAnswered: boolean;
    isLocked: boolean;
}

export const CardSection: React.FC<CardSectionProps> = ({
    title,
    sectionId,
    section,
    difficulty,
    isAnswered,
    isLocked
}) => {
    const navigate = useNavigate();

    const handlePlay = () => {
        if (!isLocked) {
            navigate(`/Section/${sectionId}`, { state: { section } });
        }
    };

    return (
        <StyleCardSection isAnswered={isAnswered} isLocked={isLocked}>
            <h3>{title}</h3>
            <div>
                <img src={star} alt="Estrela" />
                <span>{difficulty}</span>
            </div>

            <button
                className="buttonCardSection"
                type="button"
                onClick={handlePlay}
                disabled={isLocked}
            >
                {isLocked ? "Bloqueado" : "Iniciar"}
            </button>

            {isLocked && <img className="lock-icon" src={lock} alt="Bloqueado" />}
        </StyleCardSection>
    );
};
