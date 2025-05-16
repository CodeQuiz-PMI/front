import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyledConfigurationPage } from "./style";

export const Configuration = () => {

    const navigate = useNavigate();

    return (
        <StyledConfigurationPage>
            <div className="config-container">
                <h1 className="title">Configurações</h1>
                <p className="subtitle">Personalize sua experiência no CodeQuiz da maneira que preferir!</p>
            </div>
            <div className="section">
                <h2>Configuração de Som:</h2>
                <div className="button-group">
                    <Button buttonVariation="type5" type="button">
                        Ativar
                    </Button>
                    <Button buttonVariation="type5" type="button">
                        Desativar
                    </Button>
                </div>
                <div className="slider-container">
                    <input type="range" className="custom-slider" min="0" max="100" value="100" />
                </div>
            </div>

            <div className="section">
                <label>Idioma:</label>
                <select className="dropdown">
                    <option>Selecionar</option>
                    <option>Português</option>
                    <option>Inglês</option>
                </select>
            </div>

            <div className="section">
                <h2>Preferências do Jogo:</h2>
                <label>Dificuldade das perguntas</label>
                <select className="dropdown">
                    <option>Selecionar</option>
                    <option>Fácil</option>
                    <option>Médio</option>
                    <option>Difícil</option>
                </select>
                <h2>Tempo para responder:</h2>
                <Button buttonVariation="type5" type="button">
                    Ativar
                </Button>
                <span>Padrão 5 minutos</span>
                <label>Modo de Jogo:</label>
                <select className="dropdown">
                    <option>Selecionar</option>
                    <option>Normal</option>
                    <option>Desafio</option>
                </select>
            </div>

            <div className="section">
                <h2>Conta e Progresso:</h2>
                <h2>Perfil do Usuário</h2>
                <div className="button-group">
                    <input type="text" placeholder="Usuário"/>
                    <Button buttonVariation="type5" type="button">
                        Editar
                    </Button>
                </div>
                <Button buttonVariation="type6" type="button">
                    Reiniciar progresso?
                </Button>
                <Button buttonVariation="type6" type="button">
                        Desconectar da conta
                </Button>
            </div>
            <div className="buttonBack">
                <Button buttonVariation="type6" type="button" onClick={() => navigate("/")}>
                    Voltar
                </Button>
            </div>
        </StyledConfigurationPage >
        
    );
};

