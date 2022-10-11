import "./footer.scss";
import FooterLogo from "../../assets/images/footerlogo.svg";
import { Lang } from "../../languages/language";
import { useContext } from "react";
import { LangContext } from "../../context/langContext";

export const Footer = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      <footer>
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
        <section className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-box-top">
              <div className=" d-flex flex-column gap-5">
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">Автомобили</h4>
                  <p className="footer-bottom-desc">
                    Легковые авто <br /> Мото <br /> Автобусы <br /> Грузовые
                    авто <br /> Сельхозтехника <br /> Запчасти и Аксессуары{" "}
                    <br /> Прицепы и Спецтехника <br /> Водный и Другой
                    транспортa
                  </p>
                </div>
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">Дом и Сад</h4>
                  <p className="footer-bottom-desc">
                    Товары для интерьера <br />
                    Товары для сада <br />
                    Растения <br />
                    Продукты питания <br />
                    Посуда и Кухонная утварь <br />
                    Хоз.инвентарь и Бытовая химия <br />
                    Канцтовары и Расходные <br />
                    Прочие товары для дома <br />
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-column gap-5">
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">Недвижимость</h4>
                  <p className="footer-bottom-desc">
                    Аренда квартир <br />
                    Аренда домов <br />
                    Аренда гаражей и Стоянок <br />
                    Продажа квартир <br />
                    Продажа домов <br />
                    Продажа земли <br />
                    Продажа гаражей/Стоянок <br />
                    Аренда помещений <br />
                    Продажа помещений <br />
                    Прочая недвижимость <br />
                    Обмен недвижимости <br />
                    Коммерческая недвижимость <br />
                  </p>
                </div>
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">
                    Товары стройки и ремонта
                  </h4>
                  <p className="footer-bottom-desc">
                    Двери и окна <br />
                    Сантехника <br />
                    Стройматериалы <br />
                    Инструменты <br />
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-column gap-5">
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">Электроника</h4>
                  <p className="footer-bottom-desc">
                    Телефоны <br />
                    Компьютеры <br />
                    Ноутбуки, планшеты <br />
                    Оргтехника и расходники <br />
                    ТВ,Фото,Видео и Аудио <br />
                    Игры и Приставки <br />
                    Техника для дома и Для себя <br />
                    Климатическое оборудование <br />
                    Аксессуары и Комплектующие <br />
                    Техника для наблюдения <br />
                    Прочая электроника <br />
                  </p>
                </div>
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">Хобби, Отдых и Спорт</h4>
                  <p className="footer-bottom-desc">
                    Антиквариат и Коллекции <br />
                    Музыкальные инструменты <br />
                    Велосипеды <br />
                    Товары для спорта и отдыха <br />
                    Книги/Журналы <br />
                    CD/DVD/Пластинки/Кассеты <br />
                    Билеты и путешествия <br />
                    Охота и рыбалка <br />
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-column gap-5">
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title">Личные вещи</h4>
                  <p className="footer-bottom-desc">
                    Одежда, обувь, аксессуары <br />
                    Детская одежда и обувь <br />
                    Детские товары и Игрушки <br />
                    Школьникам <br />
                    Часы и украшения <br />
                    Товары для красоты и здоровья <br />
                    Разные вещи <br />
                  </p>
                </div>
                <div className="footer-bottom-box">
                  <h4 className="footer-bottom-title"> Бизнес и услуги</h4>
                  <p className="footer-bottom-desc">
                    Сырьё и материалы <br />
                    Оборудование и аренда <br />
                    Производство и обработка <br />
                    Продажа бизнеса и партнерство <br />
                    Финансовые услуги/Бухгалтерия <br />
                    Услуги для красоты и здоровья <br />
                    Услуги курьера и доставки <br />
                    Реклама, Полиграфия и Маркетинг <br />
                    Няни, Сиделки и Домработницы <br />
                    Обучение, курсы и репетиторы <br />
                    Фото, видео, искусство и дизайн <br />
                    Перевод и Набор текста <br />
                    Юридические услуги <br />
                    Прокат товаров <br />
                    Туризм и спорт <br />
                    Праздники и мероприятия <br />
                    Перевозки и Аренда авто <br />
                    Услуги спецтехники <br />
                    Автосервис <br />
                    Услуги такси <br />
                    Химчистка и стирка <br />
                    Пошив одежды и Обуви <br />
                    Ювелирные услуги <br />
                    Питание и доставка еды <br />
                    Уход за животными <br />
                    Другие услуги <br />
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <span className="footer-bottom-line"></span>
              <ul className="footer-list">
                <li className="footer-item-link">Подать объявление</li>
                <li className="footer-item"> Объявления </li>
                <li className="footer-item">Магазины</li>
                <li className="footer-item">Помощь</li>
                <li className="footer-item">Безопасность</li>
                <li className="footer-item">Реклама на сайте</li>
                <li className="footer-item">О компании</li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
