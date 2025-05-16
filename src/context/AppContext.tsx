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
  createdAt: Date;
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
    createdAt: string;
    description: string;
    difficulty: string;
    title: string;
    __v: number;
    _id: string;
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
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
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
        return res.data;
    };

    const getLevels = async () => {
        const res = await api.get("/levels");
        return res.data;
    };

    const getSections = async () => {
        const res = await api.get("/sections");
        return res.data;
    };

    const getQuestions = async () => {
        const res = await api.get("/questions");
        return res.data;
    };

    const submitAnswerLog = async (data: {
    userId: string;
    questionId: string;
    userAnswer: string;
    }) => {
        const res = await api.post("/answerlog", data);
        return res.data;
    };

    const getAnswerLogs = async () => {
        const res = await api.get("/answerlog");
        return res.data;
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

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
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};
