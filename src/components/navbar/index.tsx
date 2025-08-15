import { Link } from "react-router-dom";
import betinha from "../../assets/assetsV2/betinha.png";
import { StyledNavBar } from "./styled";

import store from "../../assets/assetsV2/store.svg";
import about from "../../assets/assetsV2/about.svg";
import config from "../../assets/assetsV2/config.svg";

export const NavBar = () => {
    return (
        <StyledNavBar>
            <div className="img">
                <img src={betinha} alt="Imagem do logo" />
            </div>
            <div className="nav">
                <Link to="/About"><img src={about} alt="" /></Link>
                <Link to="/Store"><img src={store} alt="" /></Link>
                <Link to="/Configurations"><img src={config} alt="" /></Link>
            </div>
        </StyledNavBar>
    );
};