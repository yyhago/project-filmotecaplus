import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Busca from "./pages/Busca.jsx";
import Filme from "./pages/Filme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="filme/:id" element={<Filme/>}/>
            <Route path="busca" element={<Busca/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
