import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilmeCard from "../components/FilmeCard";

import "./FilmeGrid.css";

const searchUrl = import.meta.env.VITE_SEARCH;
const imgBaseUrl = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Busca() {
  const [buscaParams] = useSearchParams();
  const [filmes, setFilmes] = useState([]);
  const query = buscaParams.get("q");

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        if (!query) {
          return;
        }

        const url = new URL(searchUrl);
        url.searchParams.append("api_key", apiKey);
        url.searchParams.append("query", query);

        const response = await fetch(url);

        // Verifica se a solicitação foi bem-sucedida antes de tentar obter os dados
        if (!response.ok) {
          throw new Error(
            `Erro na solicitação: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setFilmes(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchFilmes();
  }, [query, apiKey, searchUrl]);

  const getBuscaFilmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFilmes(data.results);
  };

  useEffect(() => {
    const buscaWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;
    getBuscaFilmes(buscaWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="queryText">{query}</span>
      </h2>
      <div className="filmeContainer">
        {filmes.length === 0 && <p>Buscando...</p>}
        {filmes.length > 0 &&
          filmes.map((filme) => (
            <FilmeCard
              key={filme.id}
              filme={filme}
              imgBaseUrl={imgBaseUrl}
            />
          ))}
      </div>
    </div>
  );
}
