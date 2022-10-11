import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { LangContext } from "../../context/langContext";
import { CardAbout } from "../../pages/cardAbout/cardAbout";
import "./card.scss";

export const Card = () => {
  const { datas, setData } = useContext(LangContext);
  const [allData, setAllData] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleBtnClick = () => {
    setAllData(true);
  };

  return (
    <>
      <div className="container mb-5">
        {datas.length ? (
          <ul className="card-list">
            {allData == false
              ? datas.slice(0, 12).map((e) => (
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
        <span
          className={allData == false ? "card-bottom-line" : "d-none"}
        ></span>
        <button
          onClick={handleBtnClick}
          className={allData == false ? "card-bottom-btn" : "d-none"}
        >
          Покозать еще
        </button>
      </div>
      <Routes>
        <Route path="/about/:id" element={<CardAbout />} />
      </Routes>
    </>
  );
};
