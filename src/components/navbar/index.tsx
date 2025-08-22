import { Link } from "react-router-dom";
import { StyledNavBar } from "./styled";

import betinha from "../../assets/assetsV2/betinha.png";
import store from "../../assets/assetsV2/store.svg";
import about from "../../assets/assetsV2/about.svg";
import config from "../../assets/assetsV2/config.svg";

export const NavBar = () => {
    const token = localStorage.getItem('token');

    return (
        <StyledNavBar>
            <div className="img">
                <Link to="/">
                    <img src={betinha} alt="Imagem do logo" />
                </Link>
            </div>
            <div className="nav">
                <Link to="/About"><img src={about} alt="" /></Link>
                
                {token ? (
                    <>
                        <Link to="/Store"><img src={store} alt="" /></Link>
                        <Link to="/Configurations"><img src={config} alt="" /></Link>
                    </>
                ) : <>
                    <Link to="/Login"><img src={store} alt="" /></Link>
                    <Link to="/Login"><img src={config} alt="" /></Link>
                </>}
            </div>
        </StyledNavBar>
    );
};
