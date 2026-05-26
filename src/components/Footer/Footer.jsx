import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Contemporary Goddesses Tarot — Women in STEM
      </p>
    </footer>
  )
}

export default Footer