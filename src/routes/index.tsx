import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/homePage";
import { AboutPage } from "../pages/aboutPage";
import { Configuration } from "../pages/configuration";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { QuestionPage } from "../pages/questionPage";
import { LevelPage } from "../pages/levelPage";
import { SectionPage } from "../pages/sectionpage";


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/configurations" element={<Configuration/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path="/Game" element={<LevelPage/>}/>
            <Route path="/Question" element={<QuestionPage/>}/>
            <Route path="/SectionPage" element={<SectionPage/>}/>
        </Routes>
    );
};