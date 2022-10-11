import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { LangContext } from "../../context/langContext";
import { Lang } from "../../languages/language";
import "./cardAbout.scss";

export const CardAbout = () => {
  const [about, setAbout] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const [aboutSpan, setAboutSpan] = useState(true);
  const param = useParams();
  const { lang, token, datas } = useContext(LangContext);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/" + `products/${param.id}`)
      .then((data) => {
        setAbout({
          isFatched: true,
          data: data.data,
          error: false,
        });
      })
      .catch((err) => {
        setAbout({
          isFatched: false,
          data: [],
          error: err,
        });
      });
  }, []);
  const handleSpan = () => {
    setAboutSpan(false);
  };
  const handleActive = () => {
    setAboutSpan(true);
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
        </div>
      </Header>
      <div className="container mt-4 mb-5">
        {Object.keys(about.data).length > 0 &&
        !about.error &&
        about.isFatched ? (
          <div className="card-about">
            <span className="about-category">
              Объявления / {about.data.category}
            </span>
            <h2 className="about-title">{about.data.title}</h2>
            <div className=" d-flex mt-3">
              <img
                className="about-img"
                src={about.data.image}
                alt="image"
                width="553"
                height="457"
              />
              <div className=" d-flex flex-column w-100 ms-5">
                <div className="about-id-box">
                  <p className="about-id">Артикул: {about.data.id}</p>
                  <p className="about-id">
                    обновлено: 28.04.17 добавлено: 28.04.17{" "}
                  </p>
                </div>
                <h2 className="abot-price">{about.data.price} у.е.</h2>
                <p className="about-region">
                  Ташкент, Ташкентская область, Юнусабадский район{" "}
                </p>
                <button className="about-tell"></button>
                <button className="about-tell"></button>
                <p className="about-author">
                  Автор обьявлении:{" "}
                  <span className="about-author-span">Зухриддин Темиров</span>
                </p>
                <div className=" d-flex mt-4 gap-3">
                  <button className="about-btn">Написать автору </button>
                  <button className="about-btn">Предложить свою цену </button>
                </div>
                <p className="about-description">
                  {about.data.description}
                  {about.data.description}
                  {about.data.description}
                </p>
                <p className="about-description">
                  {about.data.description}
                  {about.data.description}
                </p>
                <p className="about-author mt-5">Просмотры: 10958</p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        <div className=" d-flex gap-5">
          <div className=" d-flex flex-column">
            <button
              onClick={handleActive}
              className={
                aboutSpan === true
                  ? "active-navlink border-0 bg-transparent"
                  : "navLink border-0 bg-transparent"
              }
            >
              Похожие объявления
            </button>
            <span className={aboutSpan ? "navlink-span" : "mt-1"}></span>
          </div>
          <div className=" d-flex flex-column">
            <button
              onClick={handleSpan}
              className={
                aboutSpan === false
                  ? "active-navlink border-0 bg-transparent"
                  : "navLink border-0 bg-transparent"
              }
            >
              Обьявление автора
            </button>
            <span
              className={aboutSpan === false ? "navlink-span" : "mt-1"}
            ></span>
          </div>
        </div>
        <span className="card-line mb-5"></span>
        <ul className=" d-flex gap-5 list-style-none position-relative mb-5">
          <li className="slider-left top-50"></li>
          {datas.length ? (
            datas.slice(8, 12).map((e) => (
              <li className="card-item" key={e.id}>
                <img
                  className="card-img"
                  src={e.image}
                  alt="images"
                  width="162"
                  height="190"
                />
                <h3 className="card-title">{e.title}</h3>
                <span className="card-span">Вчера 22:55</span>
                <p className="card-money">{e.price}</p>
              </li>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
          <li className="slider-right top-50"></li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
