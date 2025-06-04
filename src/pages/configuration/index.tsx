import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyledConfigurationPage } from "./style";
import { api } from "../../services/api";

export const Configuration = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const userData = JSON.parse(userFromStorage);
            setUsername(userData.name || "");
        }
    }, []);

    const handleEditClick = () => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const userData = JSON.parse(userFromStorage);
            setName(userData.name || "");
            setEmail(userData.email || "");
        }
        setIsModalOpen(true);
    };

    const handleSaveChanges = async () => {
        if (password !== confirmPassword) {
            console.log("As senhas não coincidem.");
            return;
        }

        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) {
            console.log("Usuário não encontrado.");
            return;
        }

        const userData = JSON.parse(userFromStorage);
        const userId = userData.id;

        const updatedUser = {
            name,
            email,
            password
        };

        try {
            await api.patch(`/users/${userId}`, updatedUser);

            const newUserData = {
                ...userData,
                ...updatedUser
            };
            localStorage.setItem("user", JSON.stringify(newUserData));

            setUsername(name);
            setIsModalOpen(false);
            console.log("Dados atualizados com sucesso.");
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
        }
    };

    const handleResetProgress = async () => {
        try {
            const userFromStorage = localStorage.getItem("user");
            if (!userFromStorage) {
                console.log("Usuário não encontrado.");
                return;
            }

            const userData = JSON.parse(userFromStorage);
            const userId = userData.id;

            await api.delete(`/answerlogs/user/${userId}`);

            console.log("Progresso reiniciado com sucesso.");
        } catch (error) {
            console.error("Erro ao reiniciar progresso:", error);
        }
    };

    const handleGoBack = () => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            navigate("/Game");
        } else {
            navigate("/");
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const userFromStorage = localStorage.getItem("user");
            if (!userFromStorage) {
                console.log("Usuário não encontrado.");
                return;
            }

            const userData = JSON.parse(userFromStorage);
            const userId = userData.id;

            await api.delete(`/users/${userId}`);

            localStorage.removeItem("user");
            localStorage.removeItem("token");

            navigate("/");
            console.log("Conta excluída com sucesso.");
        } catch (error) {
            console.error("Erro ao excluir conta:", error);
        }
    };

    return (
        <StyledConfigurationPage>
            <div className="config-container">
                <h1 className="title">Configurações</h1>
                <p className="subtitle">
                    Personalize sua experiência no CodeQuiz da maneira que preferir!
                </p>
            </div>
            {/* <div className="section">
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
            </div> */}

            {/* <div className="section">
                <label>Idioma:</label>
                <select className="dropdown">
                    <option>Selecionar</option>
                    <option>Português</option>
                    <option>Inglês</option>
                </select>
            </div> */}

            {/* <div className="section">
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
            </div> */}

            <div className="section">
                <h2>Conta e Progresso:</h2>
                <h2>Perfil do Usuário</h2>
                <div className="button-group">
                    <input 
                        type="text" 
                        value={username}
                        readOnly
                    />
                    <Button buttonVariation="type5" type="button" onClick={handleEditClick}>
                        Editar
                    </Button>
                </div>
                <Button buttonVariation="type6" type="button" onClick={handleResetProgress}>
                    Reiniciar progresso?
                </Button>
                <Button buttonVariation="type6" type="button" onClick={handleDeleteAccount}>
                    Deletar conta
                </Button>
            </div>

            <div className="buttonBack">
                <Button buttonVariation="type6" type="button" onClick={handleGoBack}>
                    Voltar
                </Button>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Editar Perfil</h2>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Nova senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirmar senha" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                        <Button 
                            buttonVariation="type5" 
                            type="submit" 
                            onClick={handleSaveChanges}
                        >
                            Salvar
                        </Button>
                        <Button 
                            buttonVariation="type6" 
                            type="button" 
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancelar
                        </Button>
                    </div>
                </div>
            )}
        </StyledConfigurationPage>
    );
};
