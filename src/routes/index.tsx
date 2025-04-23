import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/homePage";
import { AboutPage } from "../pages/aboutPage";
import { LevelPage } from "../pages/levelPage";
import { Configuration } from "../pages/configuration";
import { LoginPage } from "../pages/loginPage";
import { QuestionPage } from "../pages/questionPage";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/configurations" element={<Configuration/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/Game" element={<LevelPage/>}/>
            <Route path="/Question" element={<QuestionPage/>}/>
        </Routes>
    );
};