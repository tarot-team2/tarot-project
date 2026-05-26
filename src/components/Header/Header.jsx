import "./Header.scss"
import { Link } from "react-router"

const Header = () => {
  return (
    <header className="header" role="banner">

      <Link to="/" className="header__logo" aria-label="Contemporary Goddesses Tarot - Ir a inicio">
        <span className="header__logo-bullet" aria-hidden="true"></span>
        <span className="header__logo-text">Contemporary Goddesses</span>
      </Link>

      {/* <NavBar className="header__navbar" /> */}

    </header>
  )
}

export default Header