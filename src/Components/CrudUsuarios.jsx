import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import "./CrudUsuarios.css";
import Menu from "./Menu";

export default function CrudUsuarios() {
  const [jogadores, setJogadores] = useState([]);
  const [pick, setPick] = useState("");
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [operacao, setOperacao] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const url = "https://jogadores-api.vercel.app/jogadores";

  useEffect(() => {
    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setJogadores(respJson))
      .catch((err) => console.log(err));
  }, [url]);

  const novosDados = () => {
    setPick("");
    setTeam("");
    setPlayer("");
    setPosition("");
    setCountry("");
    setHeight("");
    setWeight("");
    setOperacao("create");
  };

  const limparDados = () => {
    setPick("");
    setTeam("");
    setPlayer("");
    setPosition("");
    setCountry("");
    setHeight("");
    setWeight("");
    setOperacao("");
    setIsEditModalOpen(false); // Fechar modal ao limpar dados
  };

  const gravarDados = () => {
    if (operacao === "create") {
      axios.post(url, { pick, team, player, position, country, height, weight })
        .then((resp) => {
          setJogadores([...jogadores, resp.data]);
          limparDados();
        })
        .catch((err) => console.log(err));
    } else if (operacao === "update") {
      axios.put(`${url}/${pick}`, { team, player, position, country, height, weight })
        .then((resp) => {
          const updatedPlayers = jogadores.map((jogador) =>
            jogador.pick === pick ? resp.data : jogador
          );
          setJogadores(updatedPlayers);
          limparDados();
        })
        .catch((err) => console.log(err));
    }
  };

  const editarDados = (pick) => {
    const jogador = jogadores.find((jogador) => jogador.pick === pick);
    if (jogador) {
      setPick(jogador.pick);
      setTeam(jogador.team);
      setPlayer(jogador.player);
      setPosition(jogador.position);
      setCountry(jogador.country);
      setHeight(jogador.height);
      setWeight(jogador.weight);
      setOperacao("update");
      setIsEditModalOpen(true); // Abrir modal de edição
    }
  };

  const apagarDados = (pick) => {
    axios.delete(`${url}/${pick}`)
      .then(() => {
        const updatedPlayers = jogadores.filter((jogador) => jogador.pick !== pick);
        setJogadores(updatedPlayers);
      })
      .catch((err) => console.log(err));
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <Menu />
      <div id="containerGeral">
        <button type="button" onClick={novosDados}>
          Novo
        </button>
        <input
          placeholder="Pick"
          type="text"
          name="txtPick"
          value={pick}
          onChange={(e) => setPick(e.target.value)}
        />
        <input
          placeholder="NBA Team"
          type="text"
          name="txtTeam"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
        <input
          placeholder="Nome do Jogador"
          type="text"
          name="txtPlayer"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <input
          placeholder="Posição"
          type="text"
          name="txtPosition"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          placeholder="País"
          type="text"
          name="txtCountry"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          placeholder="Altura"
          type="number"
          name="txtHeight"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          placeholder="Peso"
          type="number"
          name="txtWeight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button type="button" onClick={limparDados}>
          Cancelar
        </button>
        <button type="button" onClick={gravarDados}>
          Gravar
        </button>

        <button type="button" onClick={toggleTable}>
          {showTable ? "Esconder Tabela" : "Mostrar Tabela"}
        </button>

        {showTable && (
          <table>
            <thead>
              <tr>
                <th>Pick</th>
                <th>NBA Team</th>
                <th>Nome do Jogador</th>
                <th>Posição</th>
                <th>País</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {jogadores.map((item) => (
                <tr key={item.pick}>
                  <td>{item.pick}</td>
                  <td>{item.team}</td>
                  <td>{item.player}</td>
                  <td>{item.position}</td>
                  <td>{item.country}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                  <td>
                    <FaPencil onClick={() => editarDados(item.pick)} />
                    <FaTrashCan onClick={() => apagarDados(item.pick)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {isEditModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsEditModalOpen(false)}>&times;</span>
              <h2>Editar Jogador</h2>
              <input
                placeholder="Pick"
                type="text"
                name="txtPick"
                value={pick}
                onChange={(e) => setPick(e.target.value)}
                disabled
              />
              <input
                placeholder="NBA Team"
                type="text"
                name="txtTeam"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
              <input
                placeholder="Nome do Jogador"
                type="text"
                name="txtPlayer"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
              />
              <input
                placeholder="Posição"
                type="text"
                name="txtPosition"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <input
                placeholder="País"
                type="text"
                name="txtCountry"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                placeholder="Altura"
                type="number"
                name="txtHeight"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input
                placeholder="Peso"
                type="number"
                name="txtWeight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <button type="button" onClick={gravarDados}>
                Atualizar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
