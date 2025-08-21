/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledStorePage } from "./style";
import { api } from "../../services/api";

import coin from "../../assets/assetsV2/coin.svg";
import iconArrowLeft from "../../assets/ArrowLeft.svg";
import back from "../../assets/assetsV2/return.svg";
import hearts from "../../assets/assetsV2/heart.svg";
import lamp from "../../assets/assetsV2/lamp.svg";
import balon from "../../assets/assetsV2/balon.svg";
import BetinhaHint from "../../assets/assetsV2/Dica 1.svg";
import musica from "../../assets/assetsV2/musica.svg";

import cursor from "../../../public/cursors/cursorPadrao2.png";
import gato1 from "../../../public/cursors/cursorGato1.png?url";
import gato2 from "../../../public/cursors/cursorGato2.png?url";
import aviao1 from "../../../public/cursors/cursorAviao1.png?url";
import aviao2 from "../../../public/cursors/cursorAviao2.png?url";
import melan1 from "../../../public/cursors/cursorMelan1.png?url";
import melan2 from "../../../public/cursors/cursorMelan2.png?url";
import varinha1 from "../../../public/cursors/cursorVarinha1.png?url";
import varinha2 from "../../../public/cursors/cursorVarinha2.png?url";
import nave1 from "../../../public/cursors/cursorNave1.png?url";
import nave2 from "../../../public/cursors/cursorNave2.png?url";
import espada1 from "../../../public/cursors/cursorEspada1.png?url";
import espada2 from "../../../public/cursors/cursorEspada2.png?url";
import fogo1 from "../../../public/cursors/cursorFogo1.png?url";
import fogo2 from "../../../public/cursors/cursorFogo2.png?url";
import pedra1 from "../../../public/cursors/cursorPedra1.png?url";
import pedra2 from "../../../public/cursors/cursorPedra2.png?url";
import banana1 from "../../../public/cursors/cursorBanana1.png?url";
import banana2 from "../../../public/cursors/cursorBanana2.png?url";
import planeta1 from "../../../public/cursors/cursorPlaneta1.png?url";
import planeta2 from "../../../public/cursors/cursorPlaneta2.png?url";

import gato from "../../assets/cursor/cursorGato1.png";
import aviao from "../../assets/cursor/cursorAviao1.png";
import melan from "../../assets/cursor/cursorMelan1.png";
import varinha from "../../assets/cursor/cursorVarinha1.png";
import nave from "../../assets/cursor/cursorNave1.png";
import espada from "../../assets/cursor/cursorEspada1.png";
import fogo from "../../assets/cursor/cursorFogo1.png";
import pedra from "../../assets/cursor/cursorPedra1.png";
import banana from "../../assets/cursor/cursorBanana1.png";
import planeta from "../../assets/cursor/cursorPlaneta1.png";

import { useApp, User } from "../../context/AppContext";

import music1 from "../../assets/musics/Musica1.mp3";
import music2 from "../../assets/musics/Musica2.mp3";
import music3 from "../../assets/musics/Musica3.mp3";
import music4 from "../../assets/musics/Musica4.mp3";

import { Play, Pause } from "lucide-react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../components/navbar";


export const Store = () => {
    const navigate = useNavigate();

    const { user, applyCursor } = useApp();

    const [coins, setCoins] = useState(Number);

    const [currentUser, setCurrentUser] = useState<User>();


    const [currentMusic, setCurrentMusic] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isMusicsModalOpen, setIsMusicsModalOpen] = useState(false);
    const [isLifesModalOpen, setIsLifesModalOpen] = useState(false);
    const [isHintsModalOpen, setIsHintsModalOpen] = useState(false);
    const [isCursorModalOpen, setIsCursorModalOpen] = useState(false);

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
                setCoins(userData.coins);
                setCurrentUser(userData);

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
        { title: "Echoes of Dawn", price: 50, src: music1 },
        { title: "Mystic Winds", price: 50, src: music2 },
        { title: "Celestial Journey", price: 50, src: music3 },
        { title: "Forest Dreams", price: 50, src: music4 },
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
        { title: "3", price: 25, src: hearts },
        { title: "7", price: 55, src: hearts },
        { title: "15", price: 110, src: hearts },
        { title: "35", price: 245, src: hearts },
        { title: "80", price: 520, src: hearts },
        { title: "200", price: 1200, src: hearts },
    ];

    const hints = [
        { title: "5", price: 20, src: lamp },
        { title: "15", price: 55, src: lamp },
        { title: "30", price: 100, src: lamp },
        { title: "70", price: 200, src: lamp },
        { title: "150", price: 375, src: lamp },
        { title: "400", price: 800, src: lamp },
    ];

    const cursors = [
        {
            id: "gato",
            title: "Gato",
            arrow: `url("${gato1}"), auto`,
            pointer: `url(${gato2}), auto`,
            price: 70,
            src: gato
        },
        {
            id: "aviao",
            title: "Avião de papel",
            arrow: `url("${aviao1}"), auto`,
            pointer: `url("${aviao2}"), auto`,
            price: 70,
            src: aviao
        },
        {
            id: "melan",
            title: "Melancia",
            arrow: `url("${melan1}"), auto`,
            pointer: `url("${melan2}"), auto`,
            price: 70,
            src: melan
        },
        {
            id: "varinha",
            title: "Varinha magica",
            arrow: `url("${varinha1}"), auto`,
            pointer: `url("${varinha2}"), auto`,
            price: 70,
            src: varinha
        },
        {
            id: "nave",
            title: "Nave espacial",
            arrow: `url("${nave1}"), auto`,
            pointer: `url("${nave2}"), auto`,
            price: 70,
            src: nave
        },
        {
            id: "espada",
            title: "Espada",
            arrow: `url("${espada1}"), auto`,
            pointer: `url("${espada2}"), auto`,
            price: 70,
            src: espada
        },
        {
            id: "fogo",
            title: "Bola de fogo",
            arrow: `url("${fogo1}"), auto`,
            pointer: `url("${fogo2}"), auto`,
            price: 70,
            src: fogo
        },
        {
            id: "pedra",
            title: "Pedra",
            arrow: `url("${pedra1}"), auto`,
            pointer: `url("${pedra2}"), auto`,
            price: 70,
            src: pedra
        },
        {
            id: "banana",
            title: "Banana",
            arrow: `url("${banana1}"), auto`,
            pointer: `url("${banana2}"), auto`,
            price: 70,
            src: banana
        },
        {
            id: "planeta",
            title: "Planeta",
            arrow: `url("${planeta1}"), auto`,
            pointer: `url("${planeta2}"), auto`,
            price: 70,
            src: planeta
        },
    ];

    const handlePurchase = async (type: "life" | "hint" | "music" | "cur", item: any) => {
        const userFromStorage = localStorage.getItem("user");
        if (!userFromStorage) return;

        const currentUser = JSON.parse(userFromStorage);

        if (coins < item.price) {
            toast.error("Você não tem moedas suficientes!", {
                style: { background: "#2A2A2A", color: "#2FFF00" }
            });
            return;
        }

        console.log(currentUser);

        const updatedCoins = coins - item.price;

        const updateData: any = { coins: updatedCoins };

        if (type === "life") {
            updateData.lifes = (currentUser.lifes || 0) + Number(item.title);
        }
        if (type === "hint") {
            updateData.hints = (currentUser.hints || 0) + Number(item.title);
        }
        if (type === "cur") {
            updateData.ownedCursors = [
                ...(currentUser.ownedCursors || []),
                item.id
            ];
        }
        // if (type === "music") {
        //     updateData.musics = [...(currentUser.musics || []), item.src];
        // }

        try {
            await api.patch(`/users/${currentUser.id}`, updateData);

            const newUserData = { ...currentUser, ...updateData };
            localStorage.setItem("user", JSON.stringify(newUserData));
            setCoins(updatedCoins);

            if (type === "cur") {
                setCurrentUser(newUserData as User);
            }

            toast.success("Compra realizada com sucesso!", {
                style: { background: "#2A2A2A", color: "#2FFF00" }
            });
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
        }
    };

    return (
        <StyledStorePage>
            <NavBar />

            <div className="Notification">
                <button>
                    <img style={{ width: "78px" }} src={iconArrowLeft} alt="" onClick={handleGoBack} />
                </button>

                <div className="balon">
                    <div className="text">
                        <img src={balon} alt="" />
                        <p className="p1">Bem-vindo(a) à Loja do CodeQuiz! Aqui você pode comprar vidas extras, dicas valiosas e muito mais para deixar sua experiência ainda mais divertida e do seu jeito.</p>
                        <p className="p2">Confira as opções e personalize sua aventura!</p>
                    </div>
                    <div className="img">
                        <img src={BetinhaHint} alt="" />
                    </div>
                </div>

                <div className="coins">
                    <p>{coins}</p>
                    <img src={coin} alt="" />
                </div>
            </div>

            <div className="Divlist">
                <ul className="list">
                    <li>
                        <button onClick={() => setIsHintsModalOpen(true)}>
                            <h2 style={{ fontWeight: "400" }}>Dicas</h2>
                            <img src={lamp} alt="" />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsLifesModalOpen(true)}>
                            <h2 style={{ fontWeight: "400" }}>Vidas</h2>
                            <img src={hearts} alt="" />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsCursorModalOpen(true)}>
                            <h2 style={{ fontWeight: "400" }}>Cursores</h2>
                            <img src={cursor} alt="" />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsMusicsModalOpen(true)}>
                            <h2 style={{ fontWeight: "400" }}>Músicas</h2>
                            <img src={musica} alt="" />
                        </button>
                    </li>
                </ul>
            </div>

            {isMusicsModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{ padding: "30px 40px 55px", alignItems: "stretch" }}>
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
                        <div className="Store-buttons" style={{ bottom: "-30px" }}>
                            <button className="buttonModalStore" onClick={() => setIsMusicsModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLifesModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{ padding: "30px 40px 55px", alignItems: "stretch" }}>
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
                                    <li key={life.src} className="liLifes" onClick={() => handlePurchase("life", life)}>
                                        <div className="lifesTitle">
                                            <p>{life.title}x</p>
                                            <img src={life.src} alt="coin" />
                                        </div>
                                        <button className="price">
                                            <p>{life.price}</p>
                                            <img src={coin} alt="coin" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Store-buttons" style={{ bottom: "-30px" }}>
                            <button className="buttonModalStore" type="button" onClick={() => setIsLifesModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isHintsModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{ padding: "30px 40px 55px", alignItems: "stretch" }}>
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
                                {hints.map((hint) => (
                                    <li key={hint.src} className="liLifes" onClick={() => handlePurchase("hint", hint)}>
                                        <div className="lifesTitle">
                                            <p>{hint.title}x</p>
                                            <img src={hint.src} alt="coin" />
                                        </div>
                                        <button className="price">
                                            <p>{hint.price}</p>
                                            <img src={coin} alt="coin" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="Store-buttons" style={{ bottom: "-30px" }}>
                            <button className="buttonModalStore" onClick={() => setIsHintsModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isCursorModalOpen && (
                <div className="modal">
                    <div className="modal-content" style={{ padding: "30px 40px 55px", alignItems: "stretch", maxWidth: "840px" }}>
                        <div className="modalMusics">
                            <div className="modalTitleMusics">
                                <h2>Cursores</h2>
                                <p>Obtenha cursores personalizados para suas partidas!</p>
                            </div>
                            <div className="coins">
                                <p>{coins} Moedas</p>
                            </div>
                        </div>
                        <div className="listLifes">
                            <ul className="hintsUl" id="cursor">
                                {cursors.map((cur) => (
                                    <li key={cur.id} className="liLifes">
                                        <div className="lifesTitle">
                                            <p>{cur.title}</p>
                                            <img src={cur.src} alt="coin" />
                                        </div>
                                        {currentUser?.ownedCursors?.includes(cur.id) ? (
                                            <button className="price" onClick={() => applyCursor(cur)}>
                                                <p>Ativar</p>
                                            </button>
                                        ) : (
                                            <button className="price" onClick={() => handlePurchase("cur", cur)}>
                                                <p>{cur.price}</p>
                                                <img src={coin} alt="coin" />
                                            </button>
                                        )}

                                    </li>

                                ))}
                            </ul>
                        </div>
                        <div className="Store-buttons" style={{ bottom: "-30px" }}>
                            <button className="buttonModalStore" onClick={() => setIsCursorModalOpen(false)}>
                                <img src={back} alt="Back" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </StyledStorePage>
    );
};
