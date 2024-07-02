import React from "react";
import Menu from "./Menu";
import "./Sobre.css";

const Sobre = () => {
  return (
    <div>
      <Menu />
      <div className="sobre-content">
        <h1>Sobre o Draft da NBA</h1>
        <p>
          O Draft da NBA é um evento anual em que as equipes da liga de basquete dos Estados Unidos selecionam novos jogadores. Vamos entender como funciona esse processo:
        </p>
        <h2>O que é o Draft da NBA?</h2>
        <p>
          O Draft da NBA é um evento em que os 30 times da liga podem recrutar jogadores elegíveis para ingressar na NBA, sejam eles universitários ou estrangeiros.
          Nesse processo, são selecionados 60 atletas, divididos em duas rodadas.
        </p>
        <h2>Como é definida a ordem de escolha?</h2>
        <p>
          As primeiras escolhas do draft ficam com as equipes que tiveram pior campanha na temporada anterior.
          A ordem de escolha é determinada por meio de um sorteio chamado Draft Lottery (ou loteria do draft).
          Até 2018, o time com a pior campanha tinha mais chances de obter a primeira escolha. No entanto, as regras mudaram em 2019 para evitar o “tanking” (perder propositalmente para melhorar a posição no draft).
          Agora, os três times de pior colocação têm 14% de chances cada, e o time com a melhor campanha entre os não classificados para os playoffs tem apenas 0,5% de chances de obter a primeira escolha.
        </p>
        <h2>Funcionamento da loteria do draft:</h2>
        <ul>
          <li>Participam do sorteio os 14 times que não se classificaram para os playoffs.</li>
          <li>São atribuídas combinações de números a esses times, com um total de 1.000 combinações possíveis.</li>
          <li>Os três times com pior campanha recebem 140 combinações cada (14% de chances de obter a primeira escolha).</li>
          <li>O sorteio define a ordem das quatro primeiras escolhas. Da quinta à 14ª escolha, a ordem segue a classificação na temporada regular.</li>
        </ul>
        <h2>Curiosidades:</h2>
        <ul>
          <li>Michael Jordan não foi a primeira escolha no ano em que foi recrutado.</li>
          <li>O draft é uma oportunidade para as equipes renovarem seus elencos e encontrar futuros astros do basquete.</li>
        </ul>
        <p>
          Agora você sabe como funciona o draft da NBA e como os times escolhem seus jogadores promissores! 🏀🚀
        </p>
      </div>
    </div>
  );
};

export default Sobre;
