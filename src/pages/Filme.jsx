import FilmeCard from "../components/FilmeCard";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "./Filme.css";

const filmeURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  const getFilme = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFilme(data);
  };


  const formatCurrency = (number) =>{
    return number.toLocaleString("en-US",{
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const filmeUrl = `${filmeURL}${id}?${apiKey}`;
    getFilme(filmeUrl);
  }, []);


  return (
    <div className="paginaFilme">
      {filme && (
        <>
          <FilmeCard
            filme={filme}
            mostraLink={false}
          />
          <p className="tagline">{filme.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2/> Orgamento:
            </h3>
            <p>{formatCurrency(filme.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp/> Faturamento:
            </h3>
            <p>{formatCurrency(filme.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit/> Duração:
            </h3>
            <p>{filme.runtime} minutos</p>
          </div>
          <div className="description">
            <h3>
              <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{filme.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}
