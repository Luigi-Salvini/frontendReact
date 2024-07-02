import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> Início </Link>{" "}
          </li>
          <li>
            <Link to="/crud"> Jogadores </Link>
          </li>
          <li>
            <Link to="/sobre"> Sobre o Draft </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
