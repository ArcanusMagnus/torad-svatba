import { useState } from "react";
import { useLocation } from "react-router-dom";

import LangContext from "./lang-context";

const LangProvider = (props) => {
  let defaultLang = "cz";

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  if (queryParams && queryParams.get("lang")) {
    defaultLang = queryParams.get("lang");
  }

  const [lang, setLang] = useState(defaultLang);

  const langueChangeHandler = () => {
    if (lang === "cz") {
      setLang("pl");
    } else {
      setLang("cz");
    }
  };

  const langContext = {
    lang: lang,
    changeLang: langueChangeHandler,
  };

  return (
    <LangContext.Provider value={langContext}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangProvider;
