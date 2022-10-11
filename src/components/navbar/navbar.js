import Autoimg from "../../assets/images/auto.svg";
import HomeImg from "../../assets/images/mulk.svg";
import TerminalImg from "../../assets/images/elektronika.svg";
import Rabota from "../../assets/images/rabota.svg";
import GifImg from "../../assets/images/gifs.svg";
import SadImg from "../../assets/images/domSad.svg";
import BuildImg from "../../assets/images/remont.svg";
import SportImg from "../../assets/images/sport.svg";
import Business from "../../assets/images/biznes.svg";
import "./navbar.scss";
import { Lang } from "../../languages/language";
import { useContext, useState } from "react";
import { LangContext } from "../../context/langContext";
export const NavBar = () => {
  const { lang } = useContext(LangContext);
  const [span, setSpan] = useState(
    JSON.parse(localStorage.getItem("active")) || false
  );
  const handleActive = (e) => {
    e.preventDefault();
    setSpan(true);
    window.localStorage.setItem("active", JSON.stringify(span));
  };

  window.localStorage.setItem("active", JSON.stringify(span));
  const handleClick = (e) => {
    e.preventDefault();
    setSpan(false);
    window.localStorage.setItem("active", JSON.stringify(span));
  };
  window.localStorage.setItem("active", JSON.stringify(span));
  return (
    <div className="container">
      <ul className="navbar-list">
        <li className="slider-left"></li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={Autoimg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc">{Lang[lang].navBar.avto}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={HomeImg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc"> {Lang[lang].navBar.kochmasMulk}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={TerminalImg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc">{Lang[lang].navBar.elektronika}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={Rabota}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc"> {Lang[lang].navBar.ish}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={GifImg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc">{Lang[lang].navBar.shaxsiyNarsalar}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={SadImg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc">{Lang[lang].navBar.uyBog}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={BuildImg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc">{Lang[lang].navBar.qurilish}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={SportImg}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc">{Lang[lang].navBar.xobbi}</p>
        </li>
        <li className="navbar-item">
          <img
            className=" mx-auto d-flex"
            src={Business}
            alt="image"
            width={75}
            height="75"
          />
          <p className="navbar-desc"> {Lang[lang].navBar.biznes}</p>
        </li>
        <li className="slider-right"></li>
      </ul>
      <div className=" d-flex mt-5 gap-5">
        <div className=" d-flex flex-column">
          <button
            onClick={handleActive}
            className={span == true ? "active-navlink" : "navLink"}
            href="#"
          >
            {Lang[lang].card.yangiElonlar}
          </button>
          <span className={span ? "navlink-span" : "mt-1"}></span>
        </div>
        <div className=" d-flex flex-column">
          <button
            onClick={handleClick}
            className={span == false ? "active-navlink " : "navLink"}
            href="#"
          >
            {Lang[lang].card.taklif}
          </button>
          <span className={span == false ? "navlink-span" : "mt-1"}></span>
        </div>
      </div>
      <span className="card-line"></span>
    </div>
  );
};
