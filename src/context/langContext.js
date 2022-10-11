import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("til")) || "rus"
  );
  const initialToken = JSON.parse(localStorage.getItem("token"));

  const [token, setToken] = useState(initialToken);
  const [datas, setData] = useState([]);

  useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }
    localStorage.removeItem("token");
  }, [token]);

  return (
    <LangContext.Provider
      value={{ lang, setLang, token, setToken, datas, setData }}
    >
      {children}
    </LangContext.Provider>
  );
};
