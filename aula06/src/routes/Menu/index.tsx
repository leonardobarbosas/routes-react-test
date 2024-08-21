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
          <Link to="/editar/produtos/0">Editar Produtos - 0</Link>
        </li>
        <li>
          <Link to="/editar/produtos/1">Editar Produtos - 1</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
