import { Header } from "../../components/header/header";
import { useContext, useState } from "react";
import { LangContext } from "../../context/langContext";
import { Lang } from "../../languages/language";
import { Link } from "react-router-dom";
import AcauntJpeg from "../../assets/images/acauntJpeg.png";
import AcauntItemIcon from "../../assets/images/acauntItemIcon.svg";
import FooterLogo from "../../assets/images/footerlogo.svg";
import "./acaunt.scss";

export const Acaunt = () => {
  const { lang, token, setToken } = useContext(LangContext);
  const [state, setState] = useState("1");
  const handleActive = () => {
    setState("1");
  };
  const handleBtn = () => {
    setState("2");
  };
  const handleChacked = () => {
    setState("3");
  };

  const handleClick = () => {
    alert("Royhatdan o'ting");
  };
  return (
    <>
      <Header>
        <div className="container">
          <div className="login-header">
            <div className="add-header">
              <select
                defaultValue={Lang[lang].header.headerBottom.kategoriya}
                className="add-select"
              >
                <option value={Lang[lang].header.headerBottom.kategoriya}>
                  {Lang[lang].header.headerBottom.kategoriya}
                </option>
              </select>
              <select
                defaultValue={Lang[lang].header.headerBottom.qidirish}
                className="add-select-center"
              >
                <option value={Lang[lang].header.headerBottom.qidirish}>
                  {Lang[lang].header.headerBottom.qidirish}
                </option>
              </select>
              <select
                defaultValue={Lang[lang].header.headerBottom.butun}
                className="add-select-right"
              >
                <option value={Lang[lang].header.headerBottom.butun}>
                  {Lang[lang].header.headerBottom.butun}
                </option>
              </select>
              <button className="set-btn-header">
                {Lang[lang].header.headerBottom.headerBtn.toping}
              </button>
            </div>
            {token ? (
              <Link className="add-btn" to="/addcard">
                <span className="add-btn-span">+</span>
                <p className="add-btn-desc">
                  {Lang[lang].header.headerBottom.headerBtn.qoshish}
                </p>
              </Link>
            ) : (
              <button onClick={handleClick} className="add-btn" href="#">
                <span className="add-btn-span">+</span>
                <p className="add-btn-desc">
                  {Lang[lang].header.headerBottom.headerBtn.qoshish}
                </p>
              </button>
            )}
          </div>
          <div className="acaunt-header">
            <p className="acaunt-name">Здравствуйте Зухриддин Темиров</p>

            <div className=" d-flex align-items-center">
              <p className="acaunt-header-desc">Ваш счет: 2 3000 сум</p>
              <button className="acaunt-header-btn">
                {" "}
                <span className="acaunt-header-span">+</span>
                Пополнить
              </button>
            </div>
          </div>
          <span className="line"></span>
          <div className=" d-flex gap-5">
            <div className=" d-flex flex-column">
              <button
                onClick={handleActive}
                className={
                  state == "1"
                    ? "acaunt-navlink border-0 bg-transparent"
                    : "navLink-acaunt border-0 bg-transparent"
                }
              >
                Просмотренные
              </button>
              <span
                className={state == "1" ? "navlink-span-acaunt" : "mt-1"}
              ></span>
            </div>
            <div className=" d-flex flex-column">
              <button
                onClick={handleBtn}
                className={
                  state == "2"
                    ? "acaunt-navlink border-0 bg-transparent"
                    : "navLink-acaunt border-0 bg-transparent"
                }
              >
                Выбор редакции
              </button>
              <span
                className={state == "2" ? "navlink-span-acaunt" : "mt-1"}
              ></span>
            </div>
            <div className=" d-flex flex-column">
              <button
                onClick={handleChacked}
                className={
                  state == "3"
                    ? "acaunt-navlink border-0 bg-transparent"
                    : "navLink-acaunt border-0 bg-transparent"
                }
              >
                Сниженные цены
              </button>
              <span
                className={state == "3" ? "navlink-span-acaunt" : "mt-1"}
              ></span>
            </div>
            <div className=" d-flex flex-column">
              <button
                onClick={() => {
                  setState("4");
                }}
                className={
                  state == "4"
                    ? "acaunt-navlink border-0 bg-transparent"
                    : "navLink-acaunt border-0 bg-transparent"
                }
              >
                Сниженные цены
              </button>
              <span
                className={state == "4" ? "navlink-span-acaunt" : "mt-1"}
              ></span>
            </div>
            <div className=" d-flex flex-column">
              <button
                onClick={() => {
                  setState("5");
                }}
                className={
                  state == "5"
                    ? "acaunt-navlink border-0 bg-transparent"
                    : "navLink-acaunt border-0 bg-transparent"
                }
              >
                Сниженные цены
              </button>
              <span
                className={state == "5" ? "navlink-span-acaunt" : "mt-1"}
              ></span>
            </div>
          </div>
          <span className="card-line"></span>
        </div>
      </Header>
      <section
        style={{
          background: "rgba(0, 0, 0, 0.0470165)",
          paddingTop: "43px",
          paddingBottom: "70px",
        }}
      >
        <div className="container">
          {state == "1" || state == "2" || state == "3" || state == "5" ? (
            <ul className="acaunt-list">
              <li className="acaunt-item">
                <div className=" d-flex align-items-center justify-content-between">
                  <img src={AcauntJpeg} alt="image" />
                  <h3 className="acaunt-item-title">
                    Срочно нужен программист yii2
                  </h3>
                  <p className="acaunt-item-desc">
                    2 000 000 <br />6 000 000 сум
                  </p>
                  <p className="acaunt-item-desc">
                    # 345 002 <br />
                    С: 28 июнь <br />
                    По: 28 июль
                  </p>
                  <button className="oshirish-btn">Поднять</button>
                  <button className="reklama-btn">Рекламировать</button>
                  <img src={AcauntItemIcon} alt="image" />
                </div>
                <span className="acaunt-item-span"></span>
                <div className="acaunt-item-bottom-box">
                  <span className="acaunt-item-bottom-span">Статистика</span>
                  <p className="acaunt-item-bottom">Просмотры: 195</p>
                  <p className="acaunt-item-bottom">Тел.: 200</p>
                  <p className="acaunt-item-bottom">В Избранном: 0</p>
                </div>
              </li>
              <li className="acaunt-item">
                <div className=" d-flex align-items-center justify-content-between">
                  <img src={AcauntJpeg} alt="image" />
                  <h3 className="acaunt-item-title">
                    Срочно нужен программист yii2
                  </h3>
                  <p className="acaunt-item-desc">
                    2 000 000 <br />6 000 000 сум
                  </p>
                  <p className="acaunt-item-desc">
                    # 345 002 <br />
                    С: 28 июнь <br />
                    По: 28 июль
                  </p>
                  <button className="oshirish-btn">Поднять</button>
                  <button className="reklama-btn">Рекламировать</button>
                  <img src={AcauntItemIcon} alt="image" />
                </div>
                <span className="acaunt-item-span"></span>
                <div className="acaunt-item-bottom-box">
                  <span className="acaunt-item-bottom-span">Статистика</span>
                  <p className="acaunt-item-bottom">Просмотры: 195</p>
                  <p className="acaunt-item-bottom">Тел.: 200</p>
                  <p className="acaunt-item-bottom">В Избранном: 0</p>
                </div>
              </li>
              <li className="acaunt-item">
                <div className=" d-flex align-items-center justify-content-between">
                  <img src={AcauntJpeg} alt="image" />
                  <h3 className="acaunt-item-title">
                    Срочно нужен программист yii2
                  </h3>
                  <p className="acaunt-item-desc">
                    2 000 000 <br />6 000 000 сум
                  </p>
                  <p className="acaunt-item-desc">
                    # 345 002 <br />
                    С: 28 июнь <br />
                    По: 28 июль
                  </p>
                  <button className="oshirish-btn">Поднять</button>
                  <button className="reklama-btn">Рекламировать</button>
                  <img src={AcauntItemIcon} alt="image" />
                </div>
                <span className="acaunt-item-span"></span>
                <div className="acaunt-item-bottom-box">
                  <span className="acaunt-item-bottom-span">Статистика</span>
                  <p className="acaunt-item-bottom">Просмотры: 195</p>
                  <p className="acaunt-item-bottom">Тел.: 200</p>
                  <p className="acaunt-item-bottom">В Избранном: 0</p>
                </div>
              </li>
              <li className="acaunt-item">
                <div className=" d-flex align-items-center justify-content-between">
                  <img src={AcauntJpeg} alt="image" />
                  <h3 className="acaunt-item-title">
                    Срочно нужен программист yii2
                  </h3>
                  <p className="acaunt-item-desc">
                    2 000 000 <br />6 000 000 сум
                  </p>
                  <p className="acaunt-item-desc">
                    # 345 002 <br />
                    С: 28 июнь <br />
                    По: 28 июль
                  </p>
                  <button className="oshirish-btn">Поднять</button>
                  <button className="reklama-btn">Рекламировать</button>
                  <img src={AcauntItemIcon} alt="image" />
                </div>
                <span className="acaunt-item-span"></span>
                <div className="acaunt-item-bottom-box">
                  <span className="acaunt-item-bottom-span">Статистика</span>
                  <p className="acaunt-item-bottom">Просмотры: 195</p>
                  <p className="acaunt-item-bottom">Тел.: 200</p>
                  <p className="acaunt-item-bottom">В Избранном: 0</p>
                </div>
              </li>
              <li className="acaunt-item">
                <div className=" d-flex align-items-center justify-content-between">
                  <img src={AcauntJpeg} alt="image" />
                  <h3 className="acaunt-item-title">
                    Срочно нужен программист yii2
                  </h3>
                  <p className="acaunt-item-desc">
                    2 000 000 <br />6 000 000 сум
                  </p>
                  <p className="acaunt-item-desc">
                    # 345 002 <br />
                    С: 28 июнь <br />
                    По: 28 июль
                  </p>
                  <button className="oshirish-btn">Поднять</button>
                  <button className="reklama-btn">Рекламировать</button>
                  <img src={AcauntItemIcon} alt="image" />
                </div>
                <span className="acaunt-item-span"></span>
                <div className="acaunt-item-bottom-box">
                  <span className="acaunt-item-bottom-span">Статистика</span>
                  <p className="acaunt-item-bottom">Просмотры: 195</p>
                  <p className="acaunt-item-bottom">Тел.: 200</p>
                  <p className="acaunt-item-bottom">В Избранном: 0</p>
                </div>
              </li>
            </ul>
          ) : (
            <div>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken([]);
                }}
                className=" btn btn-primary mt-3"
              >
                Logaut
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="footer-top">
        <div className="container footer-top-container">
          <div className="logo">
            <img src={FooterLogo} alt="logo" width="67" height="67" />
            <p className="footer-logo-desc">{Lang[lang].header.logo}</p>
          </div>
          <p className="footer-top-desc">
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </p>
          <div className="d-flex gap-2">
            <button className="footer-top-btn"></button>
            <button className="footer-top-google"></button>
          </div>
        </div>
      </section>
    </>
  );
};
