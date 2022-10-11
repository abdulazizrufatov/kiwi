import "./App.css";
import { Header } from "./components/header/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { CardAbout } from "./pages/cardAbout/cardAbout";
import { Elonlar } from "./pages/elonlar/elonlar";
import { useContext } from "react";
import { LangContext } from "./context/langContext";
import { AddCard } from "./pages/addCard/addCard";
import "antd/dist/antd.css";
import { Acaunt } from "./pages/accaunt/acaunt";

function App() {
  const { token } = useContext(LangContext);
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />}>
          <Route path="element" element={<h2>element</h2>} />
          <Route path="hammasi" element={<h2>element</h2>} />
        </Route>
        <Route path="/about/:id" element={<CardAbout />} />
        <Route path="/elonlar" element={<Elonlar />} />
        {token ? (
          <>
            <Route path="/addcard" element={<AddCard />} />
            <Route path="/acaunt" element={<Acaunt />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
