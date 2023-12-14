import { Link } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

export default function NavBar(){
    return(
        <nav id="navbar">
        <h2><Link to="/"><BiCameraMovie/>FilmotecaPlusLib</Link></h2>
        <form>
            <input type="text" placeholder="Procurar um filme..."/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>
      </nav>
    )
}