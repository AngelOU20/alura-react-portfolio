import "../../assets/css/header/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container header__portfolio">
        <div className="container__logo">
          <img className="logo" src="/logo.svg" alt="" />
          <span className="name">Julio Ucharima</span>
        </div>

        <nav>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="">Sobre mi</a>
            </li>
            <li className="nav__item">
              <a href="">Skills</a>
            </li>
            <li className="nav__item">
              <a href="">Hobbies</a>
            </li>
            <li className="nav__item">
              <a href="">Formación</a>
            </li>
            <li className="nav__item">
              <a href="">Proyectos</a>
            </li>
            <li className="nav__item">
              <a href="">julio_ucharima@usmp.pe</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
