import { Link, useNavigate } from "react-router-dom";
import { StyledSelectionLevelPage } from "./styled";

import betinha from "../../assets/assetsV2/betinhalogo.svg";
import { Level, useApp } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { Button } from "../../components/button";

export const SelectionLevelPage = () => {
    const navigate = useNavigate();
    
    const [levels, setLevels] = useState<Level[]>([]);
    
    const { getLevels } = useApp();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const lvls = await getLevels();
                setLevels(lvls);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };
        fetchData();
    }, [getLevels]);

    const handlePlay = (levelId: string) => {
        navigate(`/Game/${levelId}`);
    };

    const exit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    // cor de fundo padrao nao completo -> background: rgba(47, 255, 0, 0.10);
    // cor de fundo completo -> background: background: rgba(47, 255, 0, 0.35);

    return (
        <StyledSelectionLevelPage>
            <nav>
                <div className="img">
                    <Link to={"/"}>
                        <img src={betinha} alt="Imagem do logo" />
                    </Link>
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>

            <div className="container">
                <h1>Fases</h1>

                <ul>
                    {levels.map((level, index) => (
                        <li key={level._id || index} className="level-square" onClick={() => handlePlay(level._id)}>
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="back">
                <Button buttonVariation="buttonExit" type="button" onClick={exit}>
                    Sair
                </Button>
            </div>
        </StyledSelectionLevelPage>
    );
};
