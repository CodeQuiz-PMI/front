import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyledConfigurationPage } from "./style";
import { api } from "../../services/api";

import betinha from "../../assets/assetsV2/betinha.png";
import bolsa from "../../assets/assetsV2/bolsamoedas.svg";
import iconArrowLeft from "../../assets/ArrowLeft.svg";

import { JSX } from "react/jsx-dev-runtime";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useApp } from "../../context/AppContext";

export const Configuration = () => {
    const navigate = useNavigate();

    const { user } = useApp();

    const [username, setUsername] = useState("");
    const [coins, setCoins] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const [volume, setVolume] = useState(50);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const fetchUser = async () => {
                const get = await api.get(`/users/${user?.id}`);
                const userData = {
                    ...get.data,
                    id: get.data._id,
                };
                delete userData._id;
                setUsername(userData.name);
                setCoins(userData.coins);

                localStorage.setItem("user", JSON.stringify(userData));
            };
            fetchUser();
        }
        
    }, [user?.id]);


    const handleEditClick = () => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            const userData = JSON.parse(userFromStorage);
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

        const userData = JSON.parse(userFromStorage);

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

        const userData = JSON.parse(userFromStorage);
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

        const userData = JSON.parse(userFromStorage);
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
        navigate(userFromStorage ? "/Mode" : "/");
    };

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

    const sliderBackground = {
        background: `linear-gradient(
        to right,
        #2fff00 ${volume}%,
        #2C9415 ${volume}%
        )`
    };

    return (
        <StyledConfigurationPage>
            <nav>
                <div className="img">
                    <img src={betinha} alt="Imagem do logo" />
                </div>
                <div className="nav">
                    <Link to="/About">Sobre</Link>
                    <Link to="/Configurations">Configuração</Link>
                </div>
            </nav>
            
            <div className="config-container">
                <Button buttonVariation="buttonImg" type="button" onClick={handleGoBack}>
                    <img src={iconArrowLeft} alt="Anterior" />
                </Button>
                <div className="title">
                    <h1>Configurações</h1>
                    <p>Personalize sua experiência no CodeQuiz da maneira que preferir!</p>
                </div>
                <div style={{width: "78px"}}>
                </div>
            </div>

            <div className="container">
                <div className="containerLeft">
                    <div className="inputs">
                        <p>Perfil</p>
                        <div className="button">
                            <Button buttonVariation="buttonConfigPage" type="button" onClick={handleEditClick}>{username}</Button>
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Configuração de Som</p>
                        <div className="volume-control">
                            <div className="volume-icon" onClick={() => setVolume(volume === 0 ? 50 : 0)}>
                                {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="volume-slider"
                                style={sliderBackground}
                            />
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Reiniciar progresso?</p>
                        <div className="button">
                            <Button buttonVariation="buttonConfigPage" type="button" onClick={() => setIsResetModalOpen(true)}>Reiniciar</Button>
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Deletar conta?</p>
                        <div className="button">
                            <Button buttonVariation="buttonConfigPage" type="button" onClick={() => setIsDeleteModalOpen(true)}>Deletar</Button>
                        </div>
                    </div>
                </div>
                <div className="containerRight">
                    <div className="background">
                        <p>
                            Você possui:
                        </p>

                        <div className="gold">
                            <img src={bolsa} alt="" />
                            <p>{coins} Moedas</p>
                        </div>
                    
                        <Button buttonVariation="buttonConfigPageStore" type="button" onClick={() => navigate("/Store")}>
                            Acesse a Loja CodeQuiz
                        </Button>
                    </div>
                </div>
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
