/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  currentLevel: string;
  currentSection: string;
  currentQuestion: string;
  trophies: number;
  totalPoints: number;
  lifes: number;
  hints: number;
  coins: number;
  createdAt: Date;
  activeCursor?: string;
  ownedCursors?: string[];
}

export interface Level {
  _id: string;
  title: string;
  description: string;
  difficulty: string;
  createdAt: Date;
}

export interface Section {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  level: {
    _id: string;
    title: string;
    description: string;
    difficulty: string;
    createdAt: string;
    __v: number;
  };
}

export interface Question {
  _id: string;
  title: string;
  text: string;
  answer: string;
  response_1: string;
  response_2: string;
  response_3: string;
  response_4: string;
  correctResponse: string;
  type: string;
  order: number;
  points: number;
  hint: string;
  coinsValues: number;
  createdAt: Date;
  section: Section;
}

export interface AnswerLog {
  _id: string;
  user: string | User;
  question: string | Question;
  section: string | Section;
  level: string | Level;
  userAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
  createdAt: Date;
}

interface AppContextType {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  getUsers: () => Promise<User[]>;
  getLevels: () => Promise<Level[]>;
  getSections: () => Promise<Section[]>;
  getQuestions: () => Promise<Question[]>;
  submitAnswerLog: (data: {
    userId: string;
    questionId: string;
    userAnswer: string;
  }) => Promise<{ correct: boolean; pointsEarned: number }>;
  getAnswerLogs: () => Promise<AnswerLog[]>;
  user: User | null;
  getRanking: () => Promise<User[]>;
  applyCursor: (cursor: { arrow: string; pointer: string }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const res = await api.post("/auth/login", { email, password });
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    };

    const register = async (name: string, email: string, password: string) => {
        const res = await api.post("/auth/register", { name, email, password });
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    };

    const getUsers = async () => {
        const res = await api.get("/users");
        return res.data as User[];
    };

    const getLevels = async () => {
        const res = await api.get("/levels");
        return res.data as Level[];
    };

    const getSections = async () => {
        const res = await api.get("/sections");
        return res.data as Section[];
    };

    const getQuestions = async () => {
        const res = await api.get("/questions");
        return res.data as Question[];
    };

    const getAnswerLogs = async () => {
        const res = await api.get("/answerlog");
        return res.data as AnswerLog[];
    };

    const getRanking = async () => {
        const res = await api.get("/users");
        const filteredAndSorted = res.data
            .filter((user: any) => user.totalPoints && user.totalPoints > 0)
            .sort((a: any, b: any) => b.totalPoints - a.totalPoints)
            .slice(0, 10);

        return filteredAndSorted;
    };

    const submitAnswerLog = async (data: {
        userId: string;
        questionId: string;
        userAnswer: string;
    }) => {
        const res = await api.post("/answerlog", data);
        return res.data as { correct: boolean; pointsEarned: number };
    };


    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }

        const savedCursor = localStorage.getItem("activeCursor");
        if (savedCursor) {
            const cursor = JSON.parse(savedCursor);
            applyCursor(cursor); 
        }
    }, []);

    const applyCursor = (cursor: { arrow: string; pointer: string }) => {
        document.body.style.cursor = cursor.arrow;
        localStorage.setItem('activeCursor', JSON.stringify(cursor));

        const styleId = 'custom-cursor-style';
        let style = document.getElementById(styleId) as HTMLStyleElement | null;

        if (!style) {
            style = document.createElement("style");
            style.id = styleId;
            document.head.appendChild(style);
        }

        style.innerHTML = `a, button, label { cursor: ${cursor.pointer}; }`;
    };

    return (
        <AppContext.Provider
            value={{
                login,
                register,
                getUsers,
                getLevels,
                getSections,
                getQuestions,
                submitAnswerLog,
                getAnswerLogs,
                user,
                getRanking,
                applyCursor,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};
