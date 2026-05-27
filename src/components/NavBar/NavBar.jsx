import './NavBar.scss';
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-bar__link nav-bar__link--active' : 'nav-bar__link'
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            to="/mazo"
            className={({ isActive }) =>
              isActive ? 'nav-bar__link nav-bar__link--active' : 'nav-bar__link'
            }
          >
            Lectura
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            to="/historial"
            className={({ isActive }) =>
              isActive ? 'nav-bar__link nav-bar__link--active' : 'nav-bar__link'
            }
          >
            Historial
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar