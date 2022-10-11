import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LangProvider } from "./context/langContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
