import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { StyleCardSection } from "./style";
import { Section } from "../../context/AppContext";

interface CardSectionProps {
    title: string;
    description: string;
    sectionId: string;
    section: Section;
    difficulty: string;
}

export const CardSection: React.FC<CardSectionProps> = ({ title, description, sectionId, section, difficulty }) => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate(`/Section/${sectionId}`, { state: { section } });
    };

    return (
        <StyleCardSection>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <span>{difficulty}</span>
            </div>

            <Button buttonVariation="buttonCardSection" type="button" onClick={handlePlay}>
                Iniciar
            </Button>
        </StyleCardSection>
    );
};
