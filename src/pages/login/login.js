import { useContext, useRef, useState } from "react";
import { Header } from "../../components/header/header";
import { LangContext } from "../../context/langContext";
import { Lang } from "../../languages/language";
import LoginSvg from "../../assets/images/loginImg.svg";
import { useNavigate, Link } from "react-router-dom";
import "./login.scss";

export const Login = () => {
  const { lang, token, setToken } = useContext(LangContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value === !"eve.holt@reqres.in") {
      alert("Email xato");
    }
    if (passwordRef.current.value !== "cityslicka") {
      alert("Password noto'g'ri");
    }
    navigate("/");
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    alert("Royhatdan o'ting");
  };

  return (
    <div>
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
      <div className="container login-container">
        <div className="login-box">
          <h2 className="login-title">{Lang[lang].Login.royhatOtish}</h2>
          <p className="login-desc">{Lang[lang].Login.desc}</p>
          <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label" htmlFor="email">
              {Lang[lang].Login.email}
            </label>
            <input
              required
              ref={emailRef}
              className="login-input"
              type="email"
              id="email"
              placeholder="Email"
            />
            <label className="login-label mt-4" htmlFor="email">
              {Lang[lang].Login.parol}
            </label>
            <input
              required
              ref={passwordRef}
              className="login-input"
              type="password"
              placeholder="***********"
            />
            <button className="login-sebmit">
              {Lang[lang].Login.submitBtn}
            </button>
          </form>
          <div className="login-bottom">
            <span className="login-bottom-span"></span>
            <p className="login-bottom-desc">{Lang[lang].Login.yoki}</p>
            <span className="login-bottom-span"></span>
          </div>
          <p className="login-stop">{Lang[lang].Login.parolTiklash}</p>
        </div>
        <img src={LoginSvg} alt="image" width={654} height={952} />
      </div>
    </div>
  );
};
