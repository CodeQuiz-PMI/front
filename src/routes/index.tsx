import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/homePage";
import { AboutPage } from "../pages/aboutPage";
import { LevelPage } from "../pages/levelPage";
import { Configuration } from "../pages/configuration";
import { LoginPage } from "../pages/loginPage";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/configurations" element={<Configuration/>}/>
            <Route path="/Game" element={<LevelPage/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
        </Routes>
    );
};