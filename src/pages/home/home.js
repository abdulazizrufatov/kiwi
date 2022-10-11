import { useContext, useState } from "react";
import { CardBottom } from "../../components/cardBottom/cardBottom";
import { Card } from "../../components/cards/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navbar/navbar";
import { LangContext } from "../../context/langContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { datas } = useContext(LangContext);
  const [state, setState] = useState("1");
  const [all, setAll] = useState(false);

  const handleActive = () => {
    setState("1");
  };
  const handleClick = () => {
    setState("2");
  };
  const handleChacked = () => {
    setState("3");
  };
  const handleBtnClick = () => [setAll(true)];

  return (
    <>
      <Header />
      <NavBar />
      <Card />
      <CardBottom />
      <div className="container mb-5">
        <div className=" d-flex gap-5">
          <div className=" d-flex flex-column">
            <button
              onClick={handleActive}
              className={
                state == "1"
                  ? "active-navlink border-0 bg-transparent"
                  : "navLink border-0 bg-transparent"
              }
            >
              Просмотренные
            </button>
            <span className={state == "1" ? "navlink-span" : "mt-1"}></span>
          </div>
          <div className=" d-flex flex-column">
            <button
              onClick={handleClick}
              className={
                state == "2"
                  ? "active-navlink border-0 bg-transparent"
                  : "navLink border-0 bg-transparent"
              }
            >
              Выбор редакции
            </button>
            <span className={state == "2" ? "navlink-span" : "mt-1"}></span>
          </div>
          <div className=" d-flex flex-column">
            <button
              onClick={handleChacked}
              className={
                state == "3"
                  ? "active-navlink border-0 bg-transparent"
                  : "navLink border-0 bg-transparent"
              }
            >
              Сниженные цены
            </button>
            <span className={state == "3" ? "navlink-span" : "mt-1"}></span>
          </div>
        </div>
        <span className="card-line"></span>
        {datas.length ? (
          <ul className="card-list">
            {all == false
              ? datas.slice(0, 4).map((e) => (
                  <li className="card-item" key={e.id}>
                    <Link className="card-link" to={`/about/${e.id}`}>
                      <img
                        className="card-img"
                        src={e.image}
                        alt="image"
                        width="162"
                        height="190"
                      />
                      <h3 className="card-title">{e.title}</h3>
                      <span className="card-span">Вчера 22:55</span>
                      <p className="card-money">{e.price}</p>
                    </Link>
                  </li>
                ))
              : datas.map((e) => (
                  <li className="card-item" key={e.id}>
                    <Link className="card-link" to={`/about/${e.id}`}>
                      <img
                        className="card-img"
                        src={e.image}
                        alt="image"
                        width="162"
                        height="190"
                      />
                      <h3 className="card-title">{e.title}</h3>
                      <span className="card-span">Вчера 22:55</span>
                      <p className="card-money">{e.price}</p>
                    </Link>
                  </li>
                ))}
          </ul>
        ) : (
          <h2>Loading...</h2>
        )}
        <span className={all == false ? "card-bottom-line" : "d-none"}></span>
        <button
          onClick={handleBtnClick}
          className={all == false ? "card-bottom-btn" : "d-none"}
        >
          Покозать еще
        </button>
      </div>
      <Footer />
    </>
  );
};
