import star from "../../assets/Pixel Star.svg";
import { Button } from "../button";
import { StyleCardSection } from "./style";

export const CardSection = () => {
    
    return (
        <StyleCardSection>
            <h3>Introdução ao Python</h3>
            <p>Conhecendo a linguagem e sua sintaxe básica.</p>
            <div>
                <img src={star} alt="pixel star" />
                <p>Fácil</p>
            </div>

            <Button buttonVariation="type2" type="button">
                Jogar
            </Button>
        </StyleCardSection>
    );
};