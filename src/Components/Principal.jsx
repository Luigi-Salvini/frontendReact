import React from "react";

import Menu from "./Menu";
import "./Principal.css";

const jogadores = [
  { pick: 1, team: "Atlanta Hawks", player: "Zaccharie Risacher", pos: "F", school: "JL Bourg-en-Bresse (France)", country: "France", height: "6-9", weight: "215 lbs" },
  { pick: 2, team: "Washington Wizards", player: "Alexandre Sarr", pos: "F", school: "Perth (Australia)", country: "France", height: "7-0", weight: "224 lbs" },
  { pick: 3, team: "Houston Rockets", player: "Reed Sheppard", pos: "G", school: "Kentucky", country: "USA", height: "6-2", weight: "182 lbs" },
  { pick: 4, team: "San Antonio Spurs", player: "Stephon Castle", pos: "G", school: "Connecticut", country: "USA", height: "6-6", weight: "210 lbs" },
  { pick: 5, team: "Detroit Pistons", player: "Ron Holland II", pos: "F", school: "G League Ignite", country: "USA", height: "6-7", weight: "197 lbs" },
  { pick: 6, team: "Charlotte Hornets", player: "Tidjane Salaun", pos: "F", school: "Cholet Basket (France)", country: "France", height: "6-9", weight: "207 lbs" },
  { pick: 7, team: "Portland Trail Blazers", player: "Donovan Clingan", pos: "C", school: "Connecticut", country: "USA", height: "7-2", weight: "282 lbs" },
  { pick: 8, team: "San Antonio Spurs", player: "Rob Dillingham", pos: "G", school: "Kentucky", country: "USA", height: "6-1", weight: "164 lbs", traded: "Minnesota" },
  { pick: 9, team: "Memphis Grizzlies", player: "Zach Edey", pos: "C", school: "Purdue", country: "Canada", height: "7-4", weight: "299 lbs" },
  { pick: 10, team: "Utah Jazz", player: "Cody Williams", pos: "F", school: "Colorado", country: "USA", height: "6-7", weight: "178 lbs" },
  { pick: 11, team: "Chicago Bulls", player: "Matas Buzelis", pos: "F", school: "G League Ignite", country: "USA", height: "6-9", weight: "197 lbs" },
  { pick: 12, team: "Oklahoma City Thunder", player: "Nikola Topic", pos: "G", school: "KK Crvena Zvezda (Serbia)", country: "Serbia", height: "6-6", weight: "190 lbs" },
  { pick: 13, team: "Sacramento Kings", player: "Devin Carter", pos: "G", school: "Providence", country: "USA", height: "6-2", weight: "193 lbs" },
  { pick: 14, team: "Portland Trail Blazers", player: "Carlton Carrington", pos: "G", school: "Pittsburgh", country: "USA", height: "6-4", weight: "195 lbs", traded: "Washington" },
  { pick: 15, team: "Miami Heat", player: "Kel'el Ware", pos: "C", school: "Indiana", country: "USA", height: "7-0", weight: "230 lbs" },
  { pick: 16, team: "Philadelphia 76ers", player: "Jared McCain", pos: "G", school: "Duke", country: "USA", height: "6-2", weight: "203 lbs" },
  { pick: 17, team: "Los Angeles Lakers", player: "Dalton Knecht", pos: "G", school: "Tennessee", country: "USA", height: "6-5", weight: "212 lbs" },
  { pick: 18, team: "Orlando Magic", player: "Tristan da Silva", pos: "F", school: "Colorado", country: "Germany", height: "6-8", weight: "217 lbs" },
  { pick: 19, team: "Toronto Raptors", player: "Ja’Kobe Walter", pos: "G", school: "Baylor", country: "USA", height: "6-4", weight: "198 lbs" },
  { pick: 20, team: "Cleveland Cavaliers", player: "Jaylon Tyson", pos: "F", school: "California", country: "USA", height: "6-6", weight: "218 lbs" },
  { pick: 21, team: "New Orleans Pelicans", player: "Yves Missi", pos: "C", school: "Baylor", country: "Cameroon", height: "6-11", weight: "229 lbs" },
  { pick: 22, team: "Phoenix Suns", player: "DaRon Holmes II", pos: "F-C", school: "Dayton", country: "USA", height: "6-9", weight: "236 lbs", traded: "Denver" },
  { pick: 23, team: "Milwaukee Bucks", player: "AJ Johnson", pos: "G", school: "Illawarra (Australia)", country: "USA", height: "6-4", weight: "167 lbs" },
  { pick: 24, team: "New York Knicks", player: "Kyshawn George", pos: "F", school: "Miami", country: "Switzerland", height: "6-7", weight: "209 lbs", traded: "Washington" },
  { pick: 25, team: "New York Knicks", player: "Pacome Dadiet", pos: "F", school: "Ratiopharm Ulm (Germany)", country: "France", height: "6-7", weight: "187 lbs" },
  { pick: 26, team: "Washington Wizards", player: "Dillon Jones", pos: "G", school: "Weber State", country: "USA", height: "6-5", weight: "237 lbs", traded: "Oklahoma City" },
  { pick: 27, team: "Minnesota Timberwolves", player: "Terrence Shannon Jr.", pos: "F", school: "Illinois", country: "USA", height: "6-6", weight: "219 lbs" },
  { pick: 28, team: "Denver Nuggets", player: "Ryan Dunn", pos: "G", school: "Virginia", country: "USA", height: "6-6", weight: "214 lbs", traded: "Phoenix" },
  { pick: 29, team: "Utah Jazz", player: "Isaiah Collier", pos: "G", school: "USC", country: "USA", height: "6-3", weight: "205 lbs" },
  { pick: 30, team: "Boston Celtics", player: "Baylor Scheierman", pos: "G", school: "Creighton", country: "USA", height: "6-6", weight: "202 lbs" }
];

const Principal = () => {
  return (
    <div>
      <Menu />
      <div className="content">
        <h1>Draft da NBA 2024</h1>
        <table>
          <thead>
            <tr>
              <th>PICK</th>
              <th>TEAM</th>
              <th>PLAYER</th>
              <th>POS</th>
              <th>SCHOOL/CLUB</th>
              <th>COUNTRY</th>
              <th>HEIGHT</th>
              <th>WEIGHT</th>
            </tr>
          </thead>
          <tbody>
            {jogadores.map((jogador, index) => (
              <tr key={index}>
                <td>{jogador.pick}</td>
                <td>{jogador.team}</td>
                <td>{jogador.player}</td>
                <td>{jogador.pos}</td>
                <td>{jogador.school}</td>
                <td>{jogador.country}</td>
                <td>{jogador.height}</td>
                <td>{jogador.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Principal;
