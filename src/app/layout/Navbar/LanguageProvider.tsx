// src/components/common/LanguageProvider.tsx

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return <>{children}</>;
};

export default LanguageProvider;
