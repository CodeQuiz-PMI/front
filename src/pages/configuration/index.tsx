import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyledConfigurationPage } from "./style";
import { api } from "../../services/api";

// Tipagem opcional do usuário (evita repetição do JSON.parse)
interface UserData {
  id: string;
  name: string;
  email: string;
}

export const Configuration = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Carregar nome do usuário
    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const userData: UserData = JSON.parse(userFromStorage);
            setUsername(userData.name || "");
        }
    }, []);

    // Editar perfil
    const handleEditClick = () => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const userData: UserData = JSON.parse(userFromStorage);
            setName(userData.name);
            setEmail(userData.email);
        }
        setIsModalOpen(true);
    };

    const handleSaveChanges = async () => {
        if (password !== confirmPassword) {
            console.log("As senhas não coincidem.");
            return;
        }

        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) return console.log("Usuário não encontrado.");

        const userData: UserData = JSON.parse(userFromStorage);

        const updatedUser = {
            name,
            email,
            password
        };

        try {
            await api.patch(`/users/${userData.id}`, updatedUser);
            const newUserData = { ...userData, ...updatedUser };
            localStorage.setItem("user", JSON.stringify(newUserData));
            setUsername(name);
            setIsModalOpen(false);
            console.log("Dados atualizados com sucesso.");
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
        }
    };

    const handleResetProgress = async () => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) return;

        const userData: UserData = JSON.parse(userFromStorage);
        try {
            await api.delete(`/answerlogs/user/${userData.id}`);
            console.log("Progresso reiniciado com sucesso.");
        } catch (error) {
            console.error("Erro ao reiniciar progresso:", error);
        }
    };

    const handleDeleteAccount = async () => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) return;

        const userData: UserData = JSON.parse(userFromStorage);
        try {
            await api.delete(`/users/${userData.id}`);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/");
            console.log("Conta excluída com sucesso.");
        } catch (error) {
            console.error("Erro ao excluir conta:", error);
        }
    };

    const handleGoBack = () => {
        const userFromStorage = localStorage.getItem("user");
        navigate(userFromStorage ? "/Game" : "/");
    };

    // ========== Componentes auxiliares ==========
    const ConfirmationModal = ({
        title,
        message,
        onConfirm,
        onCancel
    }: {
        title: string;
        message: string | JSX.Element;
        onConfirm: () => void;
        onCancel: () => void;
    }) => (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="button-group">
                    <Button buttonVariation="type6" type="button" onClick={onConfirm}>
            Confirmar
                    </Button>
                    <Button buttonVariation="type5" type="button" onClick={onCancel}>
            Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );

    const EditModal = () => (
        <div className="modal">
            <div className="modal-content">
                <h2>Editar Perfil</h2>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Nova senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button buttonVariation="type5" type="submit" onClick={handleSaveChanges}>Salvar</Button>
                <Button buttonVariation="type6" type="button" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            </div>
        </div>
    );

    // ========== JSX ==========
    return (
        <StyledConfigurationPage>
            <div className="config-container">
                <h1 className="title">Configurações</h1>
                <p className="subtitle">Personalize sua experiência no CodeQuiz da maneira que preferir!</p>
            </div>

            <div className="section">
                <h2>Conta e Progresso:</h2>
                <h2>Perfil do Usuário</h2>
                <div className="button-group">
                    <input type="text" value={username} readOnly />
                    <Button buttonVariation="type5" type="button" onClick={handleEditClick}>Editar</Button>
                </div>

                <Button buttonVariation="type6" type="button" onClick={() => setIsResetModalOpen(true)}>Reiniciar progresso?</Button>
                <Button buttonVariation="type6" type="button" onClick={() => setIsDeleteModalOpen(true)}>Deletar conta</Button>
            </div>

            <div className="buttonBack">
                <Button buttonVariation="type6" type="button" onClick={handleGoBack}>Voltar</Button>
            </div>

            {isModalOpen && <EditModal />}

            {isDeleteModalOpen && (
                <ConfirmationModal
                    title="Tem certeza que deseja deletar sua conta?"
                    message={<span style={{ fontFamily: "Space Mono" }}>Essa ação é irreversível e apagará todos os seus dados.</span>}
                    onConfirm={() => {
                        handleDeleteAccount();
                        setIsDeleteModalOpen(false);
                    }}
                    onCancel={() => setIsDeleteModalOpen(false)}
                />
            )}

            {isResetModalOpen && (
                <ConfirmationModal
                    title="Tem certeza que deseja reiniciar seu progresso?"
                    message={
                        <span>Essa ação removerá <strong>todas as questões já respondidas</strong> e seu histórico de pontuação.</span>
                    }
                    onConfirm={() => {
                        handleResetProgress();
                        setIsResetModalOpen(false);
                    }}
                    onCancel={() => setIsResetModalOpen(false)}
                />
            )}
        </StyledConfigurationPage>
    );
};
