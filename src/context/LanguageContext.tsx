"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "ZH";

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>("EN");

    useEffect(() => {
        const savedLang = localStorage.getItem("ontheway_lang") as Language;
        if (savedLang && (savedLang === "EN" || savedLang === "ZH")) {
            setLang(savedLang);
        }
    }, []);

    const toggleLang = () => {
        setLang((prev) => {
            const next = prev === "EN" ? "ZH" : "EN";
            localStorage.setItem("ontheway_lang", next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
