import { useNavigate } from "react-router-dom";
import { StyledSectionPage } from "./styled";
import settingsIcon from "../../assets/settings.svg";
import trophyIcon from "../../assets/Trophy.svg";

export const SectionPage = () => {
  const navigate = useNavigate();

  return (
    <StyledSectionPage>
      <div className="header">
        <div className="title">
          <h1>Introdução ao Python</h1>
          <p className="description">
            Nesta fase, você aprenderá o básico da linguagem Python, incluindo como
            escrever e executar comandos simples. Vamos começar!
          </p>
        </div>
        <div className="config">
          <img src={settingsIcon} alt="Settings Icon" />
        </div>
      </div>
      <div className="stepsContainer">
        <div className="line"></div> {/* LINHA VERDE */}
        <div className="steps">
          <div className="step">
            <img className="stepIcon" src={trophyIcon} alt="Trophy Icon" />
            <div className="stepBox">
              <div className="stepNumber">1</div>
            </div>
            <div className="stepLabel">O que é Python?</div>
          </div>

          <div className="step">
            <img className="stepIcon" src={trophyIcon} alt="Trophy Icon" />
            <div className="stepBox">
              <div className="stepNumber">2</div>
            </div>
            <div className="stepLabel">Comentários e Identação</div>
          </div>

          <div className="step">
            <img className="stepIcon" src={trophyIcon} alt="Trophy Icon" />
            <div className="stepBox">
              <div className="stepNumber">3</div>
            </div>
            <div className="stepLabel">Executando Código no Python</div>
          </div>
        </div>
      </div>

      <button className="backButton" onClick={() => navigate("/")}>
        Voltar
      </button>
    </StyledSectionPage>
  );
};
