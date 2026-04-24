import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
        <h2 className="logo">Estação Meteorológica</h2>

        <nav>
        <ul className="nav-list">
            <li><Link to="/deshboard">Home</Link></li>
            <li><Link to="/cadastro">Cadastros</Link></li>
            <li><Link to="/relatorio">Relatórios</Link></li>
            <li><Link to="/">Sair</Link></li>
        </ul>
        </nav>
    </header>
)
}