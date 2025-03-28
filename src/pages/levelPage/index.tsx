import iconConfig from "../../assets/Settings.svg";
import iconTrophy from "../../assets/Trophy.svg";
import iconGoldMedal from "../../assets/Gold Medal.svg";

import { Button } from "../../components/button";
import { CardSection } from "../../components/cardSection";
import { StyleLevelPage } from "./style";

export const LevelPage = () => {
    return (
        <StyleLevelPage>
            <div className="header">
                <div className="title">
                    <h1>Escolha uma Fase</h1>
                    <p>Complete os desafios para testar e aprimorar seus conhecimentos em programação!</p>
                </div>
                <div className="config">
                    <img src={iconConfig} alt="icon setting" />
                </div>
            </div>

            <div className="buttons">
                <Button buttonVariation="type2" type="button">
                    Modo de Jogo
                </Button>
                <div>
                    <Button buttonVariation="type4" type="button">
                        Ranking
                        <img src={iconGoldMedal} alt="" />
                    </Button>
                    <Button buttonVariation="type4" type="button">
                        Conquistas
                        <img src={iconTrophy} alt="" />
                    </Button>
                </div>
            </div>

            <div className="listCards">
                <div className="text">
                    <h3>Fase 1</h3>
                    <p>0/6</p>
                </div>
                <ul>
                    <CardSection/>
                    <CardSection/>
                    <CardSection/>
                    <CardSection/>
                    <CardSection/>
                    <CardSection/>

                </ul>
            </div>

            <div className="back"> 
                <Button buttonVariation="type4" type="button">
                    Voltar
                </Button>
            </div>
        </StyleLevelPage>
    );
};