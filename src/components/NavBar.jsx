import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./NavBar.css";

export default function NavBar() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (busca.trim() === "") {
      // tratamento para evitar a navegação com uma string de busca vazia ou apenas espaços em branco
      return;
    }

    // encodeURIComponent para lidar com caracteres especiais na string de busca
    const buscaEncoded = encodeURIComponent(busca.trim());
    navigate(`/busca?q=${buscaEncoded}`);
    setBusca("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          FilmotecaPlusLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procurar um filme..."
          onChange={(e) => setBusca(e.target.value)}
          value={busca}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
