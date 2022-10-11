import { useRef } from "react";
import SiteLogo from "../../assets/images/siteLogo.svg";
import { Lang } from "../../languages/language";
import { useContext } from "react";
import { LangContext } from "../../context/langContext";
import { Link } from "react-router-dom";
import Accaunt from "../../assets/images/accaunt.png";
import "./header.scss";

export const Header = ({ children }) => {
  const { lang, setLang, token } = useContext(LangContext);

  const ruBtnRef = useRef();
  const uzBtnRef = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    setLang(ruBtnRef.current.value);
    window.localStorage.setItem("til", JSON.stringify(lang));
  };
  window.localStorage.setItem("lang", JSON.stringify(lang));
  const habdleuzClick = (e) => {
    e.preventDefault();
    setLang(uzBtnRef.current.value);
    window.localStorage.setItem("til", JSON.stringify(lang));
  };
  window.localStorage.setItem("til", JSON.stringify(lang));

  return (
    <>
      <div className="header">
        <div className="container header-container">
          <div className="logo">
            <img src={SiteLogo} alt="logo" width={67} height={67} />
            <p className="logo-desc">{Lang[lang].header.logo}</p>
          </div>
          <ul className="header-list">
            <li className="header-item">
              <Link className="header-link" to="/elonlar">
                {Lang[lang].header.Elonlar}
              </Link>
            </li>
            <li className="header-item">
              <Link className="header-link" to="/addcard">
                {" "}
                {Lang[lang].header.Dokonlar}
              </Link>
            </li>
            <li className="header-item">
              <a className="header-link" href="#">
                {" "}
                {Lang[lang].header.BiznesUchun}
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#">
                {Lang[lang].header.YordamBering}
              </a>
            </li>
          </ul>
          <div className="language d-flex align-items-center">
            <button
              onClick={handleChange}
              ref={ruBtnRef}
              value="rus"
              className={
                lang === "rus" ? "language-btn active-language" : "language-btn"
              }
            >
              Рус
            </button>{" "}
            <span>|</span>
            <button
              onClick={habdleuzClick}
              ref={uzBtnRef}
              className={
                lang === "uz" ? "language-btn active-language" : "language-btn"
              }
              value="uz"
            >
              O’z
            </button>
          </div>
          {token ? (
            <Link className=" d-flex align-items-center gap-3" to="/acaunt">
              <p className=" accaunt-name">Abdulaziz</p>
              <img src={Accaunt} alt="picture" />
            </Link>
          ) : (
            <div className="register">
              <Link to="/login" className="register-btn">
                {Lang[lang].header.register.kirish}
              </Link>
              <span className="register-span">|</span>
              <Link to="/login" className="register-btn">
                {Lang[lang].header.register.royhat}
              </Link>
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
