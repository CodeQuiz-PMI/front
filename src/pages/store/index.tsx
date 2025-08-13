import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { StyledStorePage } from "./style";
import { api } from "../../services/api";

import betinha from "../../assets/assetsV2/betinha.png";
import bolsa from "../../assets/assetsV2/bolsamoedas.svg";
import coin from "../../assets/assetsV2/coin.svg";
import iconArrowLeft from "../../assets/ArrowLeft.svg";
import back from "../../assets/assetsV2/return.svg";
import hearts from "../../assets/assetsV2/heart.svg";
import lamp from "../../assets/assetsV2/lamp.svg";

import { useApp } from "../../context/AppContext";

import music1 from "../../assets/musics/Musica1.mp3";
import music2 from "../../assets/musics/Musica2.mp3";
import music3 from "../../assets/musics/Musica3.mp3";
import music4 from "../../assets/musics/Musica4.mp3";

import { Play, Pause } from "lucide-react";

export const Store = () => {
    const navigate = useNavigate();

    const { user } = useApp();

    const [coins, setCoins] = useState("");

    const [currentMusic, setCurrentMusic] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isMusicsModalOpen, setIsMusicsModalOpen] = useState(false);
    const [isLifesModalOpen, setIsLifesModalOpen] = useState(false);
    const [isHintsModalOpen, setIsHintsModalOpen] = useState(false);

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
                setCoins(userData.coins);

                localStorage.setItem("user", JSON.stringify(userData));
            };
            fetchUser();
        }
        
    }, [user?.id]);

    const handleGoBack = () => {
        const userFromStorage = localStorage.getItem("user");
        navigate(userFromStorage ? "/Mode" : "/");
    };

    const musics = [
        { title: "Echoes of Dawn", price: 5, src: music1 },
        { title: "Mystic Winds", price: 5, src: music2 },
        { title: "Celestial Journey", price: 5, src: music3 },
        { title: "Forest Dreams", price: 5, src: music4 },
    ];

    const handlePlay = (src: string) => {
        if (currentMusic === src) {
            audioRef.current?.pause();
            setCurrentMusic(null);
        } else {
            if (audioRef.current) {
                audioRef.current.src = src;
                audioRef.current.play();
                setCurrentMusic(src);
            }
        }
    };

    const lifes = [
        { title: "1x", price: 5, src: hearts },
        { title: "5x", price: 10, src: hearts },
        { title: "10x", price: 100, src: hearts },
        { title: "100x", price: 500, src: hearts },
        { title: "500x", price: 800, src: hearts },
        { title: "1000x", price: 1000, src: hearts },
    ];

    const lamps = [
        { title: "1x", price: 5, src: lamp },
        { title: "5x", price: 10, src: lamp },
        { title: "10x", price: 100, src: lamp },
        { title: "100x", price: 500, src: lamp },
        { title: "500x", price: 800, src: lamp },
        { title: "1000x", price: 1000, src: lamp },
    ];

    return (
        <StyledStorePage>
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
                    <h1>Loja</h1>
                    <p>Personalize sua experiência com novas músicas, colecionáveis e muito mais!</p>
                </div>
                <div style={{width: "78px"}}>
                </div>
            </div>

            <div className="container">
                <div className="containerLeft">
                    <div className="inputs">
                        <p>Músicas</p>
                        <div className="button">
                            <Button buttonVariation="buttonConfigPage" type="button" onClick={() => setIsMusicsModalOpen(true)}>Ver mais</Button>
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Vidas</p>
                        <div className="button">
                            <Button buttonVariation="buttonConfigPage" type="button" onClick={() => setIsLifesModalOpen(true)}>Ver mais</Button>
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Dicas</p>
                        <div className="button">
                            <Button buttonVariation="buttonConfigPage" type="button" onClick={() => setIsHintsModalOpen(true)}>Ver mais</Button>
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
                    </div>
                </div>
            </div>

            {isMusicsModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{padding: "30px 40px 55px", alignItems: "stretch"}}>
                        <div className="modalMusics">
                            <div className="modalTitleMusics">
                                <h2>Músicas</h2>
                                <p>Personalize o seu jogo com novas músicas!</p>
                            </div>
                            <div className="coins">
                                <p>{coins} Moedas</p> 
                            </div>
                        </div>
                        <div className="listMusics">
                            <ul>
                                {musics.map((music) => (
                                    <li key={music.src} className="liMusics">
                                        <div className="price">
                                            <p>{music.price}</p>
                                            <img src={coin} alt="coin" />
                                        </div>
                                        <div className="musicTitle">
                                            <p>{music.title}</p>
                                        </div>
                                        <div className="ButtonPlay">
                                            <button onClick={() => handlePlay(music.src)}>
                                                {currentMusic === music.src ? (
                                                    <Pause size={20} />
                                                ) : (
                                                    <Play size={20} />
                                                )}
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <audio
                                ref={audioRef}
                                onEnded={() => setCurrentMusic(null)}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="Store-buttons">
                            <Button buttonVariation="buttonModalRanking" type="button" onClick={() => setIsMusicsModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {isLifesModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{padding: "30px 40px 55px", alignItems: "stretch"}}>
                        <div className="modalMusics">
                            <div className="modalTitleMusics">
                                <h2>Vidas</h2>
                                <p>Obtenha mais vida para as suas partidas!</p>
                            </div>
                            <div className="coins">
                                <p>{coins} Moedas</p> 
                            </div>
                        </div>
                        <div className="listLifes">
                            <ul>
                                {lifes.map((life) => (
                                    <li key={life.src} className="liLifes">
                                        <div className="lifesTitle">
                                            <p>{life.title}</p>
                                            <img src={life.src} alt="coin" />
                                        </div>
                                        <div className="price">
                                            <p>{life.price}</p>
                                            <img src={coin} alt="coin" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Store-buttons">
                            <Button buttonVariation="buttonModalRanking" type="button" onClick={() => setIsLifesModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {isHintsModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{padding: "30px 40px 55px", alignItems: "stretch"}}>
                        <div className="modalMusics">
                            <div className="modalTitleMusics">
                                <h2>Dicas</h2>
                                <p>Obtenha mais dicas para suas partidas!</p>
                            </div>
                            <div className="coins">
                                <p>{coins} Moedas</p> 
                            </div>
                        </div>
                        <div className="listLifes">
                            <ul className="hintsUl">
                                {lamps.map((lamp) => (
                                    <li key={lamp.src} className="liLifes">
                                        <div className="lifesTitle">
                                            <p>{lamp.title}</p>
                                            <img src={lamp.src} alt="coin" />
                                        </div>
                                        <div className="price">
                                            <p>{lamp.price}</p>
                                            <img src={coin} alt="coin" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Store-buttons">
                            <Button buttonVariation="buttonModalRanking" type="button" onClick={() => setIsHintsModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

        </StyledStorePage>
    );
};
