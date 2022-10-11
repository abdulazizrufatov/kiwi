import { Card } from "../../components/cards/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import SelectBtn from "../../assets/images/selectBtn.png";
import lineImg from "../../assets/images/lineImg.png";
import "./elonlar.scss";
import { useContext } from "react";
import { LangContext } from "../../context/langContext";

export const Elonlar = () => {
  const { datas } = useContext(LangContext);

  return (
    <>
      <Header />
      <div className="container">
        <input
          className="search-input"
          type="search"
          placeholder="Введите название обявления или  выберите из списка"
        />
        <div>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              backgraund: "transparent",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#704FFF",
              borderRadius: "3px",
            }}
          >
            Интерсное
          </button>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              backgraund: "transparent",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#57B4E2",
              borderRadius: "3px",
            }}
          >
            Топ
          </button>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              backgraund: "transparent",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#47B95E",
              borderRadius: "3px",
            }}
          >
            Отличные предложение
          </button>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#874C1A ",
              borderRadius: "3px",
            }}
          >
            Супер цена
          </button>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#787993",
              borderRadius: "3px",
            }}
          >
            г.Ташкент
          </button>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#787993",
              borderRadius: "3px",
            }}
          >
            г.Термез
          </button>
          <button
            style={{
              border: "none",
              marginLeft: "13px",
              padding: "3px 10px",
              fontWeight: "700",
              fontSize: "13px",
              lineHeight: "16px",
              color: "#787993",
              borderRadius: "3px",
            }}
          >
            г.Самарканд
          </button>
        </div>
        <div className=" d-flex align-items-center mt-3">
          <p
            className="elonlar-desc"
            style={{
              paddingRight: "54px",
            }}
          >
            Вы сейчас в рубрике
          </p>
          <img src={SelectBtn} alt="picture" />
        </div>
        <div className=" d-flex align-items-center mt-4">
          <p
            className="elonlar-desc"
            style={{
              paddingRight: "41px",
            }}
          >
            Выберите цену от и до
          </p>
          <img src={lineImg} alt="picture" />
        </div>
        <div className=" mt-4 d-flex align-items-center">
          <select
            defaultValue="Состояние"
            style={{
              padding: "15px 19px",
              paddingRight: "70px",
              marginRight: "32px",
              border: "none",
              outline: "none",
            }}
          >
            <option value="Состояние">Состояние</option>
          </select>
          <select
            defaultValue="Тип объявщика"
            style={{
              padding: "15px 19px",
              paddingRight: "70px",
              marginRight: "32px",
              border: "none",
              outline: "none",
            }}
          >
            <option value="Тип объявщика">Тип объявщика</option>
          </select>
          <select
            defaultValue="Ташкент > Мирза улугбекский район"
            style={{
              padding: "15px 19px",
              paddingRight: "70px",
              border: "none",
              outline: "none",
            }}
          >
            <option value="Ташкент > Мирза улугбекский район">
              Ташкент > Мирза улугбекский район
            </option>
          </select>
          <button className="murojat-btn">Применить</button>
        </div>
      </div>
      <span className="card-bottom-line mb-0 mt-5"></span>
      <Card />
      <div className="container">
        <h2 className="search-title">СЕЙЧАС ИЩУТ</h2>
        <div className="search-box">
          <div>
            <h2 className="search-box-title">купить Мясная продукция</h2>
            <p className="search-box-desc">2 часа назад</p>
          </div>
          <div>
            <h2 className="search-box-title">купить Мясная продукция</h2>
            <p className="search-box-desc">2 часа назад</p>
          </div>
          <div>
            <h2 className="search-box-title">купить Мясная продукция</h2>
            <p className="search-box-desc">2 часа назад</p>
          </div>
          <div>
            <h2 className="search-box-title">купить Мясная продукция</h2>
            <p className="search-box-desc">2 часа назад</p>
          </div>
          <div>
            <h2 className="search-box-title">купить Мясная продукция</h2>
            <p className="search-box-desc">2 часа назад</p>
          </div>
        </div>
        <h2
          style={{
            padding: "0px",
            marginBottom: "18px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "25px",
            color: "#41D481",
          }}
        >
          САМОЕ ИНТЕРЕСНОЕ
        </h2>
        <ul className="card-list mb-5">
          {datas.slice(0, 3).map((e) => (
            <li className="list-item" key={e.id}>
              <img
                className="card-img"
                src={e.image}
                alt="picture"
                width="162"
                height="190"
              />
              <h3 className="card-title">{e.title}</h3>
              <span className="card-span">Вчера 22:55</span>
              <p className="card-money">{e.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};
