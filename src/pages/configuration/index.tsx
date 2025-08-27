import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledConfigurationPage } from "./style";
import { api } from "../../services/api";

import iconArrowLeft from "../../assets/ArrowLeft.svg";

import { JSX } from "react/jsx-dev-runtime";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useApp } from "../../context/AppContext";
import { NavBar } from "../../components/navbar";

import music1 from "../../assets/musics/Musica1.mp3";
import music2 from "../../assets/musics/Musica2.mp3";
import music3 from "../../assets/musics/Musica3.mp3";
import music4 from "../../assets/musics/Musica4.mp3";

export const Configuration = () => {
    const navigate = useNavigate();

    const { 
        user, 
        volume, 
        setVolume, 
        currentMusic, 
        setCurrentMusic, 
        isMusicPlaying, 
        playBackgroundMusic, 
        pauseBackgroundMusic  
    } = useApp();

    const [musicsUser, setMusicsUser] = useState<string[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

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
                delete userData.password;
                setMusicsUser(userData.ownedMusics || []);

                setName(userData.name || "");
                setEmail(userData.email || "");

                localStorage.setItem("user", JSON.stringify(userData));
            };
            fetchUser();
        }
    }, [user?.id]);

    // const handleEditClick = () => {
    //     const userFromStorage = localStorage.getItem("user");
    //     if (userFromStorage) {
    //         const userData = JSON.parse(userFromStorage);
    //         setName(userData.name);
    //         setEmail(userData.email);
    //     }
    //     setIsModalOpen(true);
    // };

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
            setIsModalOpen(false);
            console.log("Dados atualizados com sucesso.");
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
        }
    };

    const handleDiscard = () => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) return;
        const u = JSON.parse(userFromStorage);
        setName(u.name || "");
        setEmail(u.email || "");
        setPassword("");
        setConfirmPassword("");
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

    const handleAddMusic = () => {
        navigate("/store");
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
            <div className="modal-content" style={{background: "var(--modal-background)", color: "var(--primary-color-light)"}}>
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="button-group">
                    <button className="buttonExit2" type="button" onClick={onConfirm}>
                        Confirmar
                    </button>
                    <button className="buttonExit2" type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );

    const EditModal = () => (
        <div className="modal">
            <div className="modal-content" style={{background: "var(--modal-background)"}}>
                <h2 style={{color: "var(--primary-color-light"}}>Editar Perfil</h2>
                <input id="inp" type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input id="inp" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input id="inp" type="password" placeholder="Nova senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input id="inp" type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="buttonExit2" type="submit" onClick={handleSaveChanges}>Salvar</button>
                <button className="buttonExit2" type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
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

    const musics = [
        { title: "Echoes of Dawn", price: 50, src: music1 },
        { title: "Mystic Winds", price: 50, src: music2 },
        { title: "Celestial Journey", price: 50, src: music3 },
        { title: "Forest Dreams", price: 50, src: music4 },
    ];

    return (
        <StyledConfigurationPage>
            <NavBar/>
            
            <div className="config-container">
                <button className="buttonImg" type="button" onClick={handleGoBack}>
                    <img src={iconArrowLeft} alt="Anterior" />
                </button>
                <div className="title">
                    <h1>Configurações</h1>
                    <p>Personalize sua experiência no CodeQuiz da maneira que preferir!</p>
                </div>
                <div style={{width: "78px"}} />
            </div>

            <div className="profile-container">
                <div className="edit-profile">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
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
                        placeholder="Confirme a nova senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="button-row">
                        <button type="button" className="btn-discard" onClick={handleDiscard}>
                            Descartar alterações
                        </button>
                        <button type="button" className="btn-save" onClick={handleSaveChanges}>
                            Salvar alterações
                        </button>
                    </div>
                </div>

                <div className="containerLeft">
                    <div className="inputs" style={{height: "130px"}}>
                        <p>Configuração de Som</p>
                        <div className="custom-select">
                            <select
                                value={currentMusic}
                                onChange={(e) => setCurrentMusic(e.target.value)}
                            >
                                <option value={music1}>Echoes of Dawn</option>
                                {musics
                                    .filter((music) => musicsUser.includes(music.title))
                                    .map((music) => (
                                        <option key={music.title} value={music.src}>
                                            {music.title}
                                        </option>
                                    ))}
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                        <div className="volume-control">
                            <div className="play-pause-button" onClick={() => {
                                if (isMusicPlaying) {
                                    pauseBackgroundMusic();
                                } else {
                                    playBackgroundMusic();
                                }
                            }}>
                                {isMusicPlaying ? <FaPause /> : <FaPlay />}
                            </div>
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

                    {/* Botão para adicionar músicas - redireciona para a loja */}
                    <div className="inputs">
                        <button className="buttonConfigPage" onClick={handleAddMusic}>+ Adicionar músicas</button>
                    </div>

                    <div className="inputs">
                        <p>Reiniciar progresso?</p>
                        <div className="button">
                            <button className="buttonConfigPage" type="button" onClick={() => setIsResetModalOpen(true)}>Reiniciar</button>
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Deletar conta?</p>
                        <div className="button">
                            <button className="buttonConfigPage" type="button" onClick={() => setIsDeleteModalOpen(true)}>Deletar</button>
                        </div>
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
                        <span style={{ fontFamily: "Space Mono" }}>Essa ação removerá <strong>todas as questões já respondidas</strong> e seu histórico de pontuação.</span>
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