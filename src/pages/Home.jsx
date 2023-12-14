import { useState, useEffect } from "react";
import FilmeCard from "../components/FilmeCard";

const filmeURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${filmeURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Os Melhores Filmes:</h2>
      <div className="filmeContainer">
        {topMovies.length === 0 && <p>Buscando...</p>}
        {topMovies.length > 0 && topMovies.map((filme) => <FilmeCard key={filme.id} filme={filme}/>)}
      </div>
    </div>
  );
};

export default Home;
