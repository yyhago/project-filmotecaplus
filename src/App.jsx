import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return(
    <div className="App">
      <nav id="navbar">
        <h2><Link to="/">FilmesLib</Link></h2>
        <Link to="/filme/1">Filme</Link>
        <Link to="/busca">Busca</Link>
      </nav>
      <h2>FilmotecaPlus</h2>
    </div>
  );
}

export default App;
