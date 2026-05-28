import "./Header.scss"
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router"

const Header = () => {
  return (
    <header className="header" role="banner">

      <Link to="/" className="header__logo" aria-label="Contemporary Goddesses Tarot - Ir a inicio">
        <span className="header__logo-bullet" aria-hidden="true"></span>
        <span className="header__logo-text">Contemporary Goddesses</span>
      </Link>

      <NavBar />
    </header>
  )
}

export default Header
