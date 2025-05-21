"use client";
import { createContext, type ReactNode, useState } from "react";

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
});

type LanguageContextType = {
  language: string;
  setLanguage?: (language: string) => void;
};

export const LanguageContextWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
