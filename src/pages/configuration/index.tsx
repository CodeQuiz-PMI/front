import { useEffect, useState } from "react";
import { StyledConfigurationPage } from "./style";
import { api } from "../../services/api";

import { useApp } from "../../context/AppContext";
import { NavBar } from "../../components/navbar";

import iconArrowLeft from "../../assets/ArrowLeft.svg";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { JSX } from "react/jsx-dev-runtime";

import music1 from "../../assets/musics/Musica1.mp3";
import music2 from "../../assets/musics/Musica2.mp3";
import music3 from "../../assets/musics/Musica3.mp3";
import music4 from "../../assets/musics/Musica4.mp3";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const musics = [
    { title: "Echoes of Dawn", price: 50, src: music1 },
    { title: "Mystic Winds", price: 50, src: music2 },
    { title: "Celestial Journey", price: 50, src: music3 },
    { title: "Forest Dreams", price: 50, src: music4 },
];

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
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setMusicsUser(user.ownedMusics || []);
        }

        const fetchUser = async () => {
            if (user?.id) {
                try {
                    const { data } = await api.get(`/users/${user.id}`);
                    const userData = { ...data, id: data._id };
                    delete userData._id;
                    delete userData.password;
                    
                    setName(userData.name || "");
                    setEmail(userData.email || "");
                    setMusicsUser(userData.ownedMusics || []);

                    localStorage.setItem("user", JSON.stringify(userData));
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error);
                }
            }
        };
        fetchUser();
    }, [user]);

    const handleSaveChanges = async () => {
        if (password !== confirmPassword) {
            toast.warn("As senhas não coincidem.");
            return;
        }

        const updatedData: { name: string; email: string; password?: string } = {
            name,
            email,
        };

        if (password) {
            updatedData.password = password;
        }

        try {
            const { data } = await api.patch(`/users/${user?.id}`, updatedData);
            const newUserData = { ...data, id: data._id };
            delete newUserData._id;
            delete newUserData.password;
            
            localStorage.setItem("user", JSON.stringify(newUserData));
            
            toast.success("Alterações salvas com sucesso!");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            toast.error("Erro ao salvar as alterações. Tente novamente.");
        }
    };

    const handleDiscard = () => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setPassword("");
            setConfirmPassword("");
        }
    };

    const handleResetProgress = async () => {
        if (!user?.id) return;
        try {
            await api.delete(`/answerlogs/user/${user.id}`);
            toast.success("Progresso reiniciado com sucesso.");
            setIsResetModalOpen(false);
        } catch (error) {
            console.error("Erro ao reiniciar progresso:", error);
            toast.error("Não foi possível reiniciar o progresso.");
        }
    };

    const handleDeleteAccount = async () => {
        if (!user?.id) return;
        try {
            await api.delete(`/users/${user.id}`);
            localStorage.clear();
            navigate("/");
            toast.success("Conta excluída com sucesso.");
        } catch (error) {
            console.error("Erro ao excluir conta:", error);
            toast.error("Não foi possível excluir a conta.");
        }
    };

    const handleGoBack = () => {
        navigate(user ? "/Mode" : "/");
    };

    const handleAddMusic = () => {
        navigate("/store");
    };

    const sliderBackground = {
        background: `linear-gradient(to right, #2fff00 ${volume}%, #2C9415 ${volume}%)`
    };

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
                    <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Nova senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirme a nova senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
                            <select value={currentMusic} onChange={(e) => setCurrentMusic(e.target.value)}>
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
                            <div className="play-pause-button" onClick={() => isMusicPlaying ? pauseBackgroundMusic() : playBackgroundMusic()}>
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

                    <div className="inputs">
                        <button className="buttonConfigPage" onClick={handleAddMusic}>+ Adicionar músicas</button>
                    </div>

                    <div className="inputs">
                        <p>Reiniciar progresso?</p>
                        <button className="buttonConfigPage" type="button" onClick={() => setIsResetModalOpen(true)}>Reiniciar</button>
                    </div>
                    <div className="inputs">
                        <p>Deletar conta?</p>
                        <button className="buttonConfigPage" type="button" onClick={() => setIsDeleteModalOpen(true)}>Deletar</button>
                    </div>
                </div>
            </div>

            {isDeleteModalOpen && (
                <ConfirmationModal
                    title="Tem certeza que deseja deletar sua conta?"
                    message={<span style={{ fontFamily: "Space Mono" }}>Essa ação é irreversível e apagará todos os seus dados.</span>}
                    onConfirm={handleDeleteAccount}
                    onCancel={() => setIsDeleteModalOpen(false)}
                />
            )}

            {isResetModalOpen && (
                <ConfirmationModal
                    title="Tem certeza que deseja reiniciar seu progresso?"
                    message={<span style={{ fontFamily: "Space Mono" }}>Essa ação removerá <strong>todas as questões já respondidas</strong> e seu histórico.</span>}
                    onConfirm={handleResetProgress}
                    onCancel={() => setIsResetModalOpen(false)}
                />
            )}
        </StyledConfigurationPage>
    );
};