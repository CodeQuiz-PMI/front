import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/homePage";
import { AboutPage } from "../pages/aboutPage";
import { Configuration } from "../pages/configuration";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { QuestionPage } from "../pages/questionPage";
import { LevelPage } from "../pages/levelPage";
import { SectionPage } from "../pages/sectionPage";
import { SelectionLevelPage } from "../pages/selectionLevelPage";
import { ModeSelectionPage } from "../pages/modeSelectionPage";
import { Store } from "../pages/store";



export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/configurations" element={<Configuration/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path="/Mode" element={<ModeSelectionPage/>}/>
            <Route path="/Level" element={<SelectionLevelPage/>}/>
            <Route path="/Game/:levelId" element={<LevelPage />} />
            <Route path="/Section/:sectionId" element={<SectionPage />} />
            <Route path="/Question/:questionId" element={<QuestionPage/>}/>
            <Route path="/Store" element={<Store/>}/>
        </Routes>
    );
};