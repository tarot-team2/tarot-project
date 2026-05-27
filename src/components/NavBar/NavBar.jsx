import './NavBar.scss';
import { Link } from 'react-router'

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <a
            href="/"
            className="nav-bar__link"
          >
            Inicio
          </a>
        </li>

        <li className="nav-bar__item">
          <a
            href="/lectura"
            className="nav-bar__link nav-bar__link--active"
          >
            Lectura
          </a>
        </li>

        <li className="nav-bar__item">
          <a
            href="/historial"
            className="nav-bar__link"
          >
            Historial
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;