import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './style/globalStyle.ts';
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/toasty.css";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle />
        <AppProvider>
            <HashRouter>
                <App />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    toastClassName="custom-toast"
                />
            </HashRouter>
        </AppProvider>
    </React.StrictMode>
);
