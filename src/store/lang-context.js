import React from "react";

const LangContext = React.createContext({
  lang: "",
  changeLang: () => {},
});

export default LangContext;
