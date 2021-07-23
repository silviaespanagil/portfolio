import silvia from "../images/silvia.ico";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__background">
          <ul className="footer__wrapper">
            <li className="footer__items">
              <p>¡Hablemos un rato!</p>
              <button type="button" className="footer__items--button">
                <a
                  href="https://www.linkedin.com/in/silviaespanagil/"
                  alt="Mi LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__items--button-link"
                >
                  Contáctame
                </a>
              </button>
            </li>
            <li className="footer__items footer__copy">
              <p className="footer__copy--text">© Silvia España Gil</p>
              <img className="footer__copy--img" src={silvia} alt="Silvia" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
