// ./ busca o caminho da pasta 

import { StyledConfigurationPage } from "./style";
export const Configuration = () => {
    return (
        <StyledConfigurationPage>
            <div className="config-container">
                <h1 className="title">Configurações</h1>
                <p className="subtitle">Personalize sua experiência no CodeQuiz da maneira que preferir!</p>
            </div>
            <div className="section">
                <h2>Opções de Personalização</h2>
                <h2>Tema do Jogo:</h2>
                <div className="button-group">
                    <button className="btn">Claro</button>
                    <button className="btn">Escuro</button>
                </div>
            </div>

            <div className="section">
                <h2>Configuração de Som:</h2>
                <div className="button-group">
                    <button className="btn">Ativar</button>
                    <button className="btn">Desativar</button>
                </div>
                <div className="slider-container">
                    <input type="range" className="custom-slider" min="0" max="100" value="50" />
                </div>
            </div>

            <div className="section">
                <h2>Idioma:</h2>
                <select className="dropdown">
                    <option>Selecionar</option>
                    <option>Português</option>
                    <option>Inglês</option>
                </select>
            </div>

            <div className="section">
                <h2>Preferências do Jogo:</h2>
                <h2>Dificuldade das perguntas</h2>
                <select className="dropdown">
                    <option>Selecionar</option>
                    <option>Fácil</option>
                    <option>Médio</option>
                    <option>Difícil</option>
                </select>
                <h2>Tempo para responder:</h2>
                <button className="btn">Ativar</button>
                <h2>Modo de Jogo:</h2>
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
                    <button className="btn large">Usuário</button>
                    <button className="btn small">Editar</button>
                </div>
                <button className="btn danger">Reiniciar progresso?</button>
                <button className="btn danger">Desconectar da conta</button>
            </div>

            <button className="btn back">Voltar</button>
        </StyledConfigurationPage >
        
    );
};

