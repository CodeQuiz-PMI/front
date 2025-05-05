import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import iconConfig from "../../assets/Settings.svg";
import iconTrophy from "../../assets/Trophy.svg";
import iconGoldMedal from "../../assets/Gold Medal.svg";
// import iconArrowRight from "../../assets/ArrowRight.svg";
// import iconArrowLeft from "../../assets/ArrowLeft.svg";

import { Button } from "../../components/button";
import { CardSection } from "../../components/cardSection";
import { StyleLevelPage } from "./style";
import { useApp } from "../../context/AppContext";

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

interface Level {
  _id: string;
  title: string;
  description: string;
  difficulty: string;
  createdAt: Date;
}

export const LevelPage = () => {
    const navigate = useNavigate();
    const { getLevels, getSections, user } = useApp();

    const [levels, setLevels] = useState<Level[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [currentLevel, setCurrentLevel] = useState<Level | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lvls = await getLevels();
                const secs = await getSections();
                setLevels(lvls);
                setSections(secs);

                const userLevelTitle = user?.currentLevel;
                const defaultLevel = lvls.find((lvl) => lvl.title === userLevelTitle);

                if (defaultLevel) {
                    setCurrentLevel(defaultLevel);
                }
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };
        fetchData();
    }, [getLevels, getSections, user?.currentLevel]);

    const currentSections = currentLevel
        ? sections.filter((section) => section.level._id === currentLevel._id)
        : [];

    return (
        <StyleLevelPage>
            <div className="header">
                <div className="title">
                    <h1>Escolha um tema</h1>
                    <p>Complete os desafios para testar e aprimorar seus conhecimentos em programação!</p>
                </div>
                <div className="config">
                    <img src={iconConfig} alt="icon setting" onClick={() => navigate("/configurations")}/>
                </div>
            </div>

            <div className="buttons">
                <Button buttonVariation="type2" type="button">Modo de Jogo</Button>
                <div>
                    <Button buttonVariation="type4" type="button">
                        Ranking <img src={iconGoldMedal} alt="" />
                    </Button>
                    <Button buttonVariation="type4" type="button">
                        Conquistas <img src={iconTrophy} alt="" />
                    </Button>
                </div>
            </div>

            <div className="listCards">
                <div className="text">
                    <h1>{currentLevel?.title || "Carregando fase..."}</h1>
                    <p>0/6</p>
                </div>

                <ul>
                    {currentSections.map((section) => (
                        <CardSection
                            key={section._id}
                            sectionId={section._id}
                            title={section.title}
                            description={section.description}
                            section={section}
                        />
                    ))}
                </ul>
        
            </div>

            <div className="back">
                <Button buttonVariation="type4" type="button" onClick={() => navigate("/")}>
          Sair
                </Button>
            </div>
        </StyleLevelPage>
    );
};
