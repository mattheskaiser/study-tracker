"use client";
import { useContext, useEffect, useState } from "react";

import { LanguageContext } from "@/context";
import { deTranslations } from "@/translations/de.translations";
import { enTranslations } from "@/translations/en.translations";
import { espTranslations } from "@/translations/esp.translations";

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const [translationFile, setTranslationFile] = useState(enTranslations);

  useEffect(() => {
    if (language) {
      if (language === "en") setTranslationFile(enTranslations);
      if (language === "es") setTranslationFile(espTranslations);
      if (language === "de") setTranslationFile(deTranslations);
    }
  }, [language]);

  return translationFile;
};
