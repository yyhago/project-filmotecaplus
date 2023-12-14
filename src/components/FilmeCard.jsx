import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imgUrl = import.meta.env.VITE_IMG;

export default function FilmeCard({ filme, mostraLink = true }) {
  return (
    <div className="filmeCard">
        <h2>{filme.title}</h2>
        <img src={imgUrl + filme.poster_path} alt={filme.title}/>
        <p>
            <FaStar /> {filme.vote_average}
        </p>
        {mostraLink && <Link to={`/filme/${filme.id}`}>Detalhes</Link>}
    </div>
  );
}
