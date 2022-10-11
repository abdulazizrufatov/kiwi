import { UploadImg } from "../../components/uploadImg/uploadImg";
import React, { useRef } from "react";
import "./addcard.scss";
export const AddCard = () => {
  const RegionRef = useRef(null);
  const CityRef = useRef(null);
  const EmailRef = useRef(null);
  const NumberRef = useRef(null);
  const NameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      region: RegionRef.current.value,
      city: CityRef.current.value,
      number: NumberRef.current.value,
      email: EmailRef.current.value,
      name: NameRef.current.value,
    });
    RegionRef.current.value = null;
    CityRef.current.value = null;
    NumberRef.current.value = null;
    EmailRef.current.value = null;
    NameRef.current.value = null;
  };
  return (
    <>
      <div className="container add-card-container">
        <div className=" add-card-box">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="add-label" htmlFor="floatingPassword">
              Цена
            </label>
          </div>
          <select defaultValue="Сум" className="add-card-select">
            <option value="Сум">Сум</option>
            <option value="ye">ye</option>
          </select>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Договорная
            </label>
          </div>
        </div>
        <div className=" add-card-box mt-5">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="add-label" htmlFor="floatingPassword">
              Количество комнат*
            </label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="add-label" htmlFor="floatingPassword"></label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="add-label" htmlFor="floatingPassword"></label>
          </div>
        </div>
        <p className="add-card-desc">Расположение*</p>
        <div className="add-card-checkbox">
          <div className=" d-flex align-items-start gap-4 flex-column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В городе
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В пригороде
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В сельской местности
              </label>
            </div>
          </div>
          <div className=" d-flex align-items-start gap-4 flex-column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Вдоль трассы
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Возле водоема, реки
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В предгорьях
              </label>
            </div>
          </div>
          <div className=" d-flex align-items-start gap-4 flex-column               ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В дачном массиве
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                На закрытой территории
              </label>
            </div>
          </div>
        </div>
        <div className=" d-flex align-items-center gap-5 mt-5 mb-5">
          <div className="form-floating">
            <select
              className="form-select"
              defaultValue="Коттедж"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="Коттедж">Коттедж</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Тип дома</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              defaultValue="Есть возможность подключения"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="Есть возможность подключения">
                Есть возможность подключения
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Электричество</label>
          </div>
        </div>
        <p className="add-card-desc">Расположение*</p>
        <div className="add-card-checkbox">
          <div className=" d-flex align-items-start gap-4 flex-column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В городе
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В пригороде
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В сельской местности
              </label>
            </div>
          </div>
          <div className=" d-flex align-items-start gap-4 flex-column">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Вдоль трассы
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Возле водоема, реки
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В предгорьях
              </label>
            </div>
          </div>
          <div className=" d-flex align-items-start gap-4 flex-column               ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                В дачном массиве
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                На закрытой территории
              </label>
            </div>
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control w-75 mt-5"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <p className="add-desc">9000 знаков осталос</p>
        <div className=" d-flex w-75 flex-wrap gap-5 mt-2">
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
          <UploadImg />
        </div>
        <div className="map-box">
          <h2 className="map-title">Местоположение объекта</h2>
          <div className=" d-flex gap-5 mb-2">
            <div className="form-floating">
              <select
                ref={RegionRef}
                defaultValue="Ташкент"
                className="form-select select-gorod"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option value="Ташкент">Ташкент</option>
              </select>
              <label htmlFor="floatingSelect">Регион</label>
            </div>
            <div className="form-floating">
              <select
                ref={CityRef}
                defaultValue="Мирза Улугбекский район"
                className="form-select select-city"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option value="Мирза Улугбекский район">
                  Мирза Улугбекский район
                </option>
              </select>
              <label htmlFor="floatingSelect">Город / Район</label>
            </div>
          </div>
          <div className="iframe-box">
            <a
              href="https://yandex.uz/maps/org/94800077397/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Нажот Талим Чилонзор филиал
            </a>
            <a
              href={
                "https://yandex.uz/maps/10335/tashkent/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
              }
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Учебный центр в Ташкенте
            </a>
            <a
              href={
                "https://yandex.uz/maps/10335/tashkent/category/computer_courses/184106158/?utm_medium=mapframe&utm_source=maps"
              }
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "28px",
              }}
            >
              Компьютерные курсы в Ташкенте
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/-/CCUZiNWoWC"
              width="653"
              height="376"
              //   allowfullscreen="true"
              style={{ position: "relative" }}
              title="iframe"
            ></iframe>
          </div>
          <form onSubmit={handleSubmit} className=" mt-3">
            <div className="form-floating mb-3">
              <input
                ref={NumberRef}
                required
                type="number"
                className="form-control w-25"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Телефонный номер</label>
            </div>
            <div className="form-floating">
              <input
                ref={EmailRef}
                required
                type="email"
                className="form-control w-25"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Email-адрес</label>
            </div>
            <div className="form-floating mb-3">
              <input
                ref={NameRef}
                required
                type="text"
                className="form-control w-25"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Контактный лицо</label>
            </div>
            <div className=" d-flex mt-5 align-items-center">
              <button className="form-btn">
                Добавить обьявления бесплатно
              </button>
              <p className="form-desc">Предпросмотр</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
