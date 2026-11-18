"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "zh";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "en", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("tiffany-language");
    if (saved === "zh" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("tiffany-language", language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "zh" : "en";
  return (
    <button
      type="button"
      className={`language-toggle ${compact ? "is-compact" : ""}`}
      onClick={() => setLanguage(next)}
      aria-label={language === "en" ? "切换到中文" : "Switch to English"}
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
