import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudUsuarios from "./Components/CrudUsuarios";
import Principal from "./Components/Principal";
import Sobre from "./Components/Sobre";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/crud" element={<CrudUsuarios />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);
