// components/LanguageSelector.js
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => changeLanguage("en")} className="btn">
        {t("english")} 🇺🇸
      </button>
      <button onClick={() => changeLanguage("fr")} className="btn">
        {t("french")} 🇫🇷
      </button>
    </div>
  );
};

export default LanguageSelector;
