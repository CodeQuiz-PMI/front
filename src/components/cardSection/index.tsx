import { useNavigate } from "react-router-dom";
import star from "../../assets/Pixel Star.svg";
import { Button } from "../button";
import { StyleCardSection } from "./style";

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

interface CardSectionProps {
    title: string;
    description: string;
    sectionId: string;
    section: Section;
}

export const CardSection: React.FC<CardSectionProps> = ({ title, description, sectionId, section }) => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate(`/Section/${sectionId}`, { state: { section } });
    };

    return (
        <StyleCardSection>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <img src={star} alt="pixel star" />
                <span>Fácil</span>
            </div>

            <Button buttonVariation="buttonCardSection" type="button" onClick={handlePlay}>
                Iniciar
            </Button>
        </StyleCardSection>
    );
};
