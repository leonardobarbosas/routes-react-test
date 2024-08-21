import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/editar/produtos">Editar Produtos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
