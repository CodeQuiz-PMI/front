import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { StyleCardSection } from "./style";
import { Section } from "../../context/AppContext";

import star from "../../assets/assetsV2/Star 3.svg";

interface CardSectionProps {
    title: string;
    description: string;
    sectionId: string;
    section: Section;
    difficulty: string;
}

export const CardSection: React.FC<CardSectionProps> = ({ title, sectionId, section, difficulty }) => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate(`/Section/${sectionId}`, { state: { section } });
    };

    return (
        <StyleCardSection>
            <h3>{title}</h3>
            <div>
                <img src={star} alt="Estrela" />
                <span>{difficulty}</span>
            </div>

            <Button buttonVariation="buttonCardSection" type="button" onClick={handlePlay}>
                Iniciar
            </Button>
        </StyleCardSection>
    );
};
